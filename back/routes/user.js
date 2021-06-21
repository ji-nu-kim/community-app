const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const { User, Community, Category, Notice, Meet, sequelize } = require('../models');
const bcrypt = require('bcrypt');
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');
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

// 유저정보 불러오기
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const user = await User.findOne({
        where: { id: req.user.id },
        attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
        order: [[Notice, 'createdAt', 'DESC']],
        include: [
          {
            model: Community,
            as: 'Owned',
          },
          {
            model: Category,
            through: 'CATEGORY_USER',
            attributes: ['id', 'name', 'profilePhoto'],
          },
          {
            model: Meet,
            include: {
              model: User,
              through: 'MEET_USER',
              attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
            },
          },
          {
            model: Community,
            through: 'COMMUNITY_USER',
            include: [
              {
                model: User,
                through: 'COMMUNITY_USER',
                attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
              },
              {
                model: Category,
                through: 'COMMUNITY_CATEGORY',
                attributes: ['name', 'profilePhoto'],
              },
            ],
          },
          {
            model: Notice,
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

// 로그인
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
      return res.status(200).send('로그인에 성공했습니다');
    });
  })(req, res, next);
});

// 로그아웃
router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('로그아웃 되었습니다');
});

// 회원가입
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

// 유저탈퇴
router.delete('/:userId', async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const user = await User.findOne({
      where: { id: req.params.userId },
      include: [{ model: Community, through: 'COMMUNITY_USER' }, { model: Notice }],
    });
    if (!user) {
      await t.rollback();
      return res.status(404).send('존재하지 않는 유저입니다');
    }
    const userCommunity = user.Communities;
    if (userCommunity.length) {
      return res.status(404).send('커뮤니티에 가입된 상태에서는 탈퇴가 불가능합니다');
    }
    const categories = await user.getCategories();
    if (categories.length) {
      categories.map(
        async category => await user.removeCategories(category.id, { transaction: t })
      );
    }
    const notices = user.Notices;
    if (notices.length) {
      notices.map(async notice => await notice.destroy(notice.id, { transaction: t }));
    }
    await user.destroy({ transaction: t });
    await t.commit();
    return res.status(200).json('ok');
  } catch (error) {
    await t.rollback();
    console.error(error);
    next(error);
  }
});

// 유저 프로필 수정
router.post('/profile', upload.none(), isLoggedIn, async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
    });
    if (!user) {
      return res.status(404).send('유저 정보가 없습니다');
    }
    await User.update(
      {
        nickname: req.body.nickname,
        profilePhoto: req.body.profilePhoto[0],
      },
      { where: { id: user.id } }
    );
    const result = await Promise.all(
      req.body.category.map(v =>
        Category.findOne({
          where: { name: v },
        })
      )
    );
    await user.setCategories(result.map(v => v.id));
    const profileChangeUser = await User.findOne({
      where: { id: req.user.id },
      attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
      order: [[Notice, 'createdAt', 'DESC']],
      include: [
        {
          model: Community,
          as: 'Owned',
        },
        {
          model: Category,
          through: 'CATEGORY_USER',
          attributes: ['id', 'name', 'profilePhoto'],
        },
        {
          model: Meet,
          include: {
            model: User,
            through: 'MEET_USER',
            attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
          },
        },
        {
          model: Community,
          through: 'COMMUNITY_USER',
          include: [
            {
              model: User,
              through: 'COMMUNITY_USER',
              attributes: ['id', 'nickname', 'email', 'country', 'profilePhoto'],
            },
            {
              model: Category,
              through: 'COMMUNITY_CATEGORY',
              attributes: ['name', 'profilePhoto'],
            },
          ],
        },
        {
          model: Notice,
        },
      ],
    });
    return res.status(200).json(profileChangeUser);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 알림 체크표시
router.patch('/notification', isLoggedIn, async (req, res, next) => {
  try {
    await Notice.update({ checked: true }, { where: { UserId: req.user.id } });
    const notices = await Notice.findAll({
      where: { UserId: req.user.id },
    });
    if (!notices) {
      return res.status(404).send('알림을 찾을 수 없습니다');
    }
    return res.status(200).json(notices);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 알림 삭제
router.delete('/notification/:notificationId', isLoggedIn, async (req, res, next) => {
  try {
    await Notice.destroy({ where: { id: req.params.notificationId } });
    return res
      .status(200)
      .json({ notificationId: parseInt(req.params.notificationId, 10) });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 주소 변경
router.patch('/country', isLoggedIn, async (req, res, next) => {
  try {
    await User.update({ country: req.body.country }, { where: { id: req.user.id } });
    return res.status(200).json({ country: req.body.country });
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 프론트 input name="image"에서 올린 사진들이 upload.array('image')로 전달됨
router.post('/image', upload.array('image'), (req, res, next) => {
  res.json(req.files.map(v => v.filename));
});

module.exports = router;
