const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const {
  User,
  Post,
  Image,
  Comment,
  Community,
  Category,
  sequelize,
} = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
const { Op } = require('sequelize');

const router = express.Router();

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads폴더를 생성합니다');
  fs.mkdirSync('uploads');
}

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

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: Community,
            as: 'Owned',
          },
          {
            model: Category,
            through: 'CATEGORY_USER',
            attributes: ['name', 'profilePhoto'],
          },
        ],
      });
      return res.status(200).json(user);
    } else {
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/login', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (error, user, info) => {
    if (error) {
      console.error(error);
      return next(error);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async loginError => {
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      const userInfo = await User.findOne({
        where: { id: user.id },
        attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
        include: [
          {
            model: Post,
            attributes: ['id'],
          },
          {
            model: Community,
            as: 'Owned',
          },
        ],
      });
      return res.status(200).json(userInfo);
    });
  })(req, res, next);
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('로그아웃 되었습니다');
});

router.post('/signup', isNotLoggedIn, async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
      country: req.body.country,
    });
    return res.status(201).send('회원가입이 되었습니다');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/profile', upload.none(), isLoggedIn, async (req, res, next) => {
  try {
    await User.update(
      {
        nickname: req.body.nickname,
        profilePhoto: req.body.profilePhoto[0],
      },
      { where: { id: req.user.id } }
    );
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    const result = await Promise.all(
      req.body.category.map(v =>
        Category.findOne({
          where: { name: v },
        })
      )
    );

    await user.addCategories(result.map(v => v.id));
    return res.status(200).json({
      nickname: req.body.nickname,
      profilePhoto: req.body.profilePhoto,
      category: req.body.category,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 프론트 input name="image"에서 올린 사진들이 upload.array('image')로 전달됨
router.post('/image', upload.array('image'), (req, res, next) => {
  res.json(req.files.map(v => v.filename));
});

router.get('/:userId', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: parseInt(req.params.userId, 10) },
      attributes: [
        'id',
        'nickname',
        'email',
        'country',
        'categories',
        'profilePhoto',
      ],
      include: [
        {
          model: Post,
          attributes: ['id'],
        },
      ],
    });
    if (user) {
      const data = user.toJSON();
      data.Posts = data.Posts.length;
      data.Followers = data.Followers.length;
      data.Followings = data.Followings.length;
      console.log(data);
      return res.status(200).json(data);
    } else {
      return res.status(404).json('존재하지 않는 사용자입니다');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
