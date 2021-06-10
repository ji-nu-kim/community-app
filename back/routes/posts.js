const express = require('express');
const { Op } = require('sequelize');
const { Post, User, Image, Comment } = require('../models');
const router = express.Router();

router.get('/community/:communityId/post', async (req, res, next) => {
  try {
    const where = {
      CommunityId: req.params.communityId,
    };
    if (parseInt(req.query.lastId, 10)) {
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) };
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [
        ['createdAt', 'DESC'],
        [Comment, 'createdAt', 'DESC'],
      ],
      attributes: ['id', 'content', 'createdAt', 'updatedAt'],
      include: [
        {
          model: User,
          attributes: ['id', 'nickname', 'profilePhoto'],
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['id', 'nickname', 'profilePhoto'],
            },
          ],
        },
        { model: Image },
      ],
    });
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
