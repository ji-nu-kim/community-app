const express = require('express');
const { Op } = require('sequelize');
const { User, Community, Category } = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const fullCommunity = await Community.findAll({
      where,
      limit: 10,
      order: [['createdAt', 'DESC']],
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
      ],
    });
    return res.status(200).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
