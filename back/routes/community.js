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

router.post('/join', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.body.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    await community.addJoinUsers(req.user.id);
    return res.status(200).send('커뮤니티 가입신청이 완료되었습니다');
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

// 개별 커뮤니티 검색
router.get('/:communityId', async (req, res, next) => {
  try {
    const community = await Community.findOne({
      where: { id: req.params.communityId },
    });
    if (!community) {
      return res.status(404).send('존재하지 않는 커뮤니티입니다');
    }
    const fullCommunity = await Community.findOne({
      where: { id: community.id },
      include: [
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
              model: User,
              as: 'Likers',
              attributes: ['id'],
            },
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
      ],
    });
    return res.status(200).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
