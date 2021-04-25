const express = require('express');
const { Post, User, Image, Comment, Community } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const community = await Community.create({
      name: req.body.name,
      description: req.body.description,
      OwnerId: req.user.id,
    });

    const fullCommunity = await Community.findOne({
      where: { id: community.id },
      // attributes: ['id', 'name', 'description', 'createdAt', 'updatedAt', ''],
    });
    return res.status(201).json(fullCommunity);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
