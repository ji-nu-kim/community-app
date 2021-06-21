const express = require('express');
const { Community, Category } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/:keyword', async (req, res, next) => {
  try {
    const communities = await Community.findAll({
      // 커뮤니티이름에 키워드가 들어가있는 것을 찾는다
      where: {
        communityName: { [Op.like]: `%${decodeURIComponent(req.params.keyword)}%` },
      },
      order: [['createdAt', 'DESC']],
      attributes: ['id', 'country', 'communityName', 'profilePhoto', 'createdAt'],
      include: {
        model: Category,
        through: 'COMMUNITY_CATEGORY',
        attributes: ['name', 'profilePhoto'],
      },
    });
    if (!communities) {
      return res.status(404).send('커뮤니티가 존재하지 않습니다');
    }
    return res.status(200).json(communities);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
