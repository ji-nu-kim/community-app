const express = require('express');
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

router.post('/', isLoggedIn, async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const exCommunity = await Community.findOne({
      where: { name: req.body.name },
    });
    if (exCommunity) {
      await t.rollback();
      return res.status(404).send('사용중인 커뮤니티입니다');
    }

    const community = await Community.create(
      {
        name: req.body.name,
        description: req.body.description,
        OwnerId: req.user.id,
      },
      { transaction: t }
    );
    await community.addMembers(req.user.id, { transaction: t });
    await t.commit();
    const fullCommunity = await Community.findOne({
      where: { id: community.id },
    });
    return res.status(201).json(fullCommunity);
  } catch (error) {
    await t.rollback();
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
    });
    return res.status(200).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
