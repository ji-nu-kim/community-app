const express = require('express');
const multer = require('multer');
const path = require('path');
const {
  Post,
  User,
  Image,
  Comment,
  Community,
  sequelize,
  Category,
} = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

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
    const fullCommunity = await Community.findOne({
      where: { id: community.id },
    });
    return res.status(201).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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

router.post('/image', upload.array('image'), (req, res, next) => {
  res.json(req.files.map(v => v.filename));
});

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
          through: 'CATEGORY_USER',
          attributes: ['name', 'profilePhoto'],
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
