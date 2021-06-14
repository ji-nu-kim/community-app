const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  Post,
  User,
  Image,
  Comment,
  Community,
  Category,
  Meet,
  sequelize,
} = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      const basename = path.basename(file.originalname, ext);
      done(null, basename + '_' + new Date().getTime() + ext);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
});

// 커뮤니티 생성
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const exCommunity = await Community.findOne({
      where: { communityName: req.body.communityName },
    });
    if (exCommunity) {
      return res.status(404).send('사용중인 커뮤니티입니다');
    }
    const community = await Community.create({
      communityName: req.body.communityName,
      description: req.body.description,
      country: req.body.country,
      OwnerId: req.user.id,
    });
    await community.addUsers(req.user.id);
    await community.addCategories(parseInt(req.body.category, 10));

    return res.status(200).send('커뮤니티를 생성했습니다');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 가입신청
router.post('/join', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.body.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await community.addJoinUsers(req.user.id);
    const joinUser = await User.findOne({
      where: { id: req.user.id },
      attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
    });
    return res.status(200).json(joinUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 가입거절 or 임시 커뮤니티 유저에서 삭제
router.delete('/:communityId/refuse/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await community.removeJoinUsers(req.params.userId);
    return res.status(200).json({ userId: parseInt(req.params.userId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 가입승인
router.post('/accept', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.body.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await community.addUsers(req.body.userId);
    const acceptUser = await User.findOne({
      where: { id: req.body.userId },
      attributes: ['id', 'nickname', 'profilePhoto'],
    });
    return res.status(200).json(acceptUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 탈퇴(문제, 탈퇴한 유저의 게시글, 댓글이 삭제가 안됌: 해결방법 - 게시글을 전부 삭제해야 탈퇴 가능 or 게시글, 댓글 전부 삭제할 수 있는 방법 찾기 or 널처리 후 데이터 받아올 때 널은 빼고 받아오기)
router.delete('/:communityId/leave', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await Promise.all([
      Post.destroy({
        where: { UserId: req.user.id, CommunityId: req.params.communityId },
      }),
      Comment.destroy({ where: {} }),
      community.removeUsers(req.user.id),
    ]);
    return res.status(200).json({ userId: parseInt(req.user.id, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 싱글 카테고리 불러오기
router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const category = await Category.findOne({
      where: { id: req.params.categoryId },
    });
    if (!category) {
      return res.status(404).send('카테고리가 존재하지 않습니다');
    }
    return res.status(200).json(category);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 모든 카테고리 불러오기
router.get('/categories', async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    if (!categories) {
      return res.status(404).send('카테고리가 존재하지 않습니다');
    }
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 정보 수정
router.post('/info', upload.none(), isLoggedIn, async (req, res, next) => {
  try {
    await Community.update(
      {
        description: req.body.description,
        caution: req.body.caution,
        requirement: req.body.requirement,
        profilePhoto: req.body.profilePhoto[0],
      },
      { where: { id: req.body.id } }
    );

    return res.status(200).send('커뮤니티정보가 변경 되었습니다');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 이미지
router.post('/image', upload.array('image'), (req, res, next) => {
  res.json(req.files.map(v => v.filename));
});

// 단일 커뮤니티 정보 불러오기
router.get('/:communityId', async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const fullCommunity = await Community.findOne({
      where: { id: community.id },
      include: [
        {
          model: User,
          through: 'COMMUNITY_JOIN',
          as: 'JoinUsers',
        },
        {
          model: User,
          through: 'COMMUNITY_USER',
        },
        {
          model: Category,
          through: 'COMMUNITY_CATEGORY',
          attributes: ['name', 'profilePhoto'],
        },
        {
          model: Post,
          include: [
            { model: Image },
            { model: User, attributes: ['id', 'nickname', 'profilePhoto'] },
            {
              model: Comment,
              attributes: ['id', 'content'],
              include: [
                {
                  model: User,
                  attributes: ['id', 'nickname', 'profilePhoto'],
                },
              ],
            },
          ],
        },
        {
          model: Meet,
          include: { model: User, through: 'MEET_USER' },
        },
      ],
    });
    return res.status(200).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 모임 생성
router.post('/:communityId/meet', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
    });
    if (!community) {
      await t.rollback();
      return res.status(404).send('커뮤니티를 찾을 수 없습니다');
    }
    const meet = await Meet.create(
      {
        place: req.body.place,
        fee: req.body.fee,
        members: req.body.members,
        title: req.body.title,
        date: req.body.date,
        MeetOwnerId: req.user.id,
        CommunityId: req.body.communityId,
      },
      { transaction: t }
    );
    await meet.addUsers(req.user.id, { transaction: t });
    await t.commit();
    const fullMeet = await Meet.findOne({
      where: { id: meet.id },
      include: {
        model: User,
        through: 'MEET_USER',
      },
    });
    return res.status(200).json(fullMeet);
  } catch (error) {
    await t.rollback();
    console.error(error);
    next(error);
  }
});

// 모임 수정
router.patch('/:communityId/meet/:meetId', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
      include: { model: Meet },
    });
    if (!community) {
      await t.rollback();
      return res.status(404).send('커뮤니티를 찾을 수 없습니다');
    }
    const meet = await community.Meets.find(
      meet => meet.id === parseInt(req.params.meetId, 10)
    );
    if (!meet) {
      await t.rollback();
      return res.status(404).send('모임을 찾을 수 없습니다');
    }
    await meet.update(
      {
        place: req.body.place,
        fee: req.body.fee,
        members: req.body.members,
        title: req.body.title,
        date: req.body.date,
      },
      { transaction: t }
    );
    await t.commit();
    const updatedMeet = await Meet.findOne({
      where: { id: meet.id },
      include: { model: User, through: 'MEET_USER' },
    });
    return res.status(200).json(updatedMeet);
  } catch (error) {
    await t.rollback();
    console.error(error);
    next(error);
  }
});

// 모임 가입
router.post('/:communityId/meet/:meetId/join', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
      include: { model: Meet },
    });
    if (!community) {
      await t.rollback();
      return res.status(404).send('커뮤니티를 찾을 수 없습니다');
    }
    const meet = await community.Meets.find(
      meet => meet.id === parseInt(req.params.meetId, 10)
    );
    if (!meet) {
      await t.rollback();
      return res.status(404).send('모임을 찾을 수 없습니다');
    }
    const users = await meet.getUsers();
    if (meet.members <= users.length) {
      return res.status(403).send('인원이 초과되었습니다');
    }
    await meet.addUsers(req.user.id, { transaction: t });
    await t.commit();
    const fullMeet = await Meet.findOne({
      where: { id: meet.id },
      include: { model: User, through: 'MEET_USER' },
    });
    return res.status(200).json(fullMeet);
  } catch (error) {
    await t.rollback();
    console.error(error);
    next(error);
  }
});

// 모임 제거
router.delete('/:communityId/meet/:meetId', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
      include: { model: Meet },
    });
    if (!community) {
      return res.status(404).send('커뮤니티를 찾을 수 없습니다');
    }
    const meet = await community.Meets.find(
      meet => meet.id === parseInt(req.params.meetId, 10)
    );
    if (!meet) {
      return res.status(404).send('모임을 찾을 수 없습니다');
    }
    const users = await meet.getUsers();
    const usersId = await users.map(user => user.id);
    await Promise.all(usersId.map(userId => meet.removeUsers(userId)));
    await Meet.destroy({
      where: {
        id: parseInt(req.params.meetId, 10),
        CommunityId: parseInt(req.params.communityId, 10),
      },
    });
    return res.status(200).json({ meetId: parseInt(req.params.meetId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 모임 탈퇴
router.delete('/:communityId/meet/:meetId/leave', async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
      include: { model: Meet },
    });
    if (!community) {
      return res.status(404).send('error');
    }
    const meet = await community.Meets.find(
      meet => meet.id === parseInt(req.params.meetId, 10)
    );
    if (!meet) {
      return res.status(404).send('모임을 찾을 수 없습니다');
    }
    await meet.removeUsers(req.user.id);
    return res
      .status(200)
      .json({ meetId: parseInt(req.params.meetId, 10), userId: req.user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
