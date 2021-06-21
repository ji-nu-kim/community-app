const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  User,
  Comment,
  Community,
  Category,
  Meet,
  sequelize,
  Notice,
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
router.post('/:communityId/join', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
    });
    if (!user) {
      return res.status(404).send('존재하지 않는 유저입니다');
    }
    await community.addJoinUsers(user.id);
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 가입거절
router.delete('/:communityId/refuse/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(404).send('존재하지 않는 유저입니다');
    }
    await community.removeJoinUsers(user.id);
    await Notice.create({
      title: `${community.communityName} 커뮤니티 가입신청이 거절되었습니다`,
      UserId: user.id,
    });
    return res.status(200).json({ userId: user.id });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 가입승인
router.post('/:communityId/accept/:userId', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const user = await User.findOne({ where: { id: parseInt(req.params.userId, 10) } });
    if (!user) {
      return res.status(404).send('존재하지 않는 유저입니다');
    }
    await community.removeJoinUsers(user.id);
    await community.addUsers(user.id);
    await Notice.create({
      title: req.body.title,
      UserId: user.id,
    });
    const acceptUser = await User.findOne({
      where: { id: user.id },
      attributes: ['id', 'nickname', 'profilePhoto'],
    });
    return res.status(200).json(acceptUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 커뮤니티 삭제
router.delete('/:communityId', async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
      include: { model: User, through: 'COMMUNITY_USER' },
    });
    if (!community) {
      await t.rollback();
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    // 게시글 전부 삭제
    const communityPost = await community.getPosts({
      include: { model: Comment },
    });

    if (communityPost.length) {
      await communityPost.map(
        async post => {
          if (post.Comments.length) {
            await post.Comments.map(async comment => {
              await comment.destroy({
                where: {
                  UserId: comment.UserId,
                  id: comment.id,
                  PostId: comment.PostId,
                },
              });
            });
          }
          await post.destroy({
            where: {
              id: post.id,
              UserId: post.UserId,
              CommunityId: post.CommunityId,
            },
          });
        },
        { transaction: t }
      );
    }

    // 모임 전부 삭제(유저리스트 지우고 모임삭제)
    const communityMeet = await community.getMeets();
    if (communityMeet.length) {
      await communityMeet.map(async meet => {
        let users = await meet.getUsers();
        if (users) {
          await users.map(async user => {
            await meet.removeUsers(user.id, { transaction: t });
          });
        }
      });
      await communityMeet.map(
        async meet => await meet.destroy({ where: { id: meet.id } })
      );
    }

    // 유저 전부 삭제
    const usersId = await community.Users.map(user => user.id);
    await usersId.map(
      async userId => await community.removeUsers(userId, { transaction: t })
    );

    // 카테고리 삭제
    const category = await community.getCategories();
    await category.map(
      async c => await community.removeCategories(c.id, { transaction: t })
    );

    // 커뮤니티 제거
    await community.destroy({ transaction: t });

    await t.commit();
    return res.status(200).json(communityMeet);
  } catch (error) {
    await t.rollback();
    console.error(error);
    next(error);
  }
});

// 커뮤니티 탈퇴
router.delete('/:communityId/leave', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const communityPost = await community.getPosts({
      include: { model: Comment },
    });
    const communityMeet = await community.getMeets();

    await communityPost.map(async post => {
      if (post.UserId === parseInt(req.user.id, 10)) {
        if (post.Comments.length) {
          await Promise.all(
            post.Comments.map(comment => {
              comment.destroy({
                where: {
                  UserId: req.user.id,
                  id: comment.id,
                  PostId: comment.PostId,
                },
              });
            })
          );
        }
        await post.destroy({
          where: {
            id: post.id,
            UserId: req.user.id,
            CommunityId: post.CommunityId,
          },
        });
        // 남이 쓴 글에 내 댓글이 있으면 삭제
      } else if (post.Comments.length) {
        await Promise.all(
          post.Comments.map(comment => {
            if (comment.UserId === parseInt(req.user.id, 10)) {
              comment.destroy({
                where: {
                  UserId: req.user.id,
                  id: comment.id,
                  PostId: comment.PostId,
                },
              });
            }
          })
        );
      }
    });

    await communityMeet.map(async meet => {
      // 내 모임 삭제(참가한 유저 먼저 지우고 모임 삭제)
      if (meet.MeetOwnerId === parseInt(req.user.id, 10)) {
        let users = await meet.getUsers();
        await Promise.all(users.map(user => meet.removeUsers(user.id)));
        await meet.destroy({
          where: {
            id: meet.id,
            CommunityId: req.params.communityId,
          },
        });
        // 다른 사람모임에 참가했다면 나를 제거
      } else {
        let user = await meet.getUsers({
          where: { id: parseInt(req.user.id, 10) },
        });
        if (user) {
          await meet.removeUsers(parseInt(req.user.id, 10));
        }
      }
    });

    await community.removeUsers(parseInt(req.user.id, 10));
    await Notice.create({
      title: `${req.user.nickname}님이(가) ${community.communityName}을(를) 탈퇴하셨습니다`,
      UserId: community.OwnerId,
    });

    return res
      .status(200)
      .json({ communityId: parseInt(req.params.communityId, 10), userId: req.user.id });
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
router.post('/:communityId/info', upload.none(), isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: parseInt(req.params.communityId, 10) },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await Community.update(
      {
        description: req.body.description,
        caution: req.body.caution,
        requirement: req.body.requirement,
        profilePhoto: req.body.profilePhoto[0],
      },
      { where: { id: community.id } }
    );
    const updatedCommunity = await Community.findOne({ where: { id: community.id } });
    return res.status(200).json({
      description: updatedCommunity.description,
      caution: updatedCommunity.caution,
      requirement: updatedCommunity.requirement,
      profilePhoto: updatedCommunity.profilePhoto,
    });
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
