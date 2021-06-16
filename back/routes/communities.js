const express = require('express');
const { Op } = require('sequelize');
const { Community, Category } = require('../models');
const router = express.Router();

// 새로운 커뮤니티 불러오기
router.get('/', async (req, res, next) => {
  try {
    const newCommunity = await Community.findAll({
      limit: 21,
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Category,
          through: 'COMMUNITY_CATEGORY',
          attributes: ['name', 'profilePhoto'],
        },
      ],
    });
    return res.status(200).json(newCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 동네 커뮤니티 불러오기
router.get('/country/:country', async (req, res, next) => {
  try {
    const where = { country: req.params.country };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const villageCommunity = await Community.findAll({
      limit: 12,
      order: [['createdAt', 'DESC']],
      where,
      include: [
        {
          model: Category,
          through: 'COMMUNITY_CATEGORY',
          attributes: ['name', 'profilePhoto'],
        },
      ],
    });
    if (!villageCommunity) {
      return res.status(404).send('해당 지역에 커뮤니티가 없습니다');
    }
    return res.status(200).json(villageCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 카테고리별 커뮤니티 불러오기
router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const categoryCommunity = await Community.findAll({
      where,
      limit: 18,
      order: [['createdAt', 'DESC']],
      include: {
        model: Category,
        through: 'COMMUNITY_CATEGORY',
        where: { id: req.params.categoryId },
      },
    });
    if (!categoryCommunity) {
      return res.status(404).send('해당 카테고리에 커뮤니티가 없습니다');
    }
    return res.status(200).json(categoryCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
