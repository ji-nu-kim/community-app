const Sequelize = require('sequelize');
const user = require('./user');
const post = require('./post');
const comment = require('./comment');
const image = require('./image');
const community = require('./community');
const category = require('./category');
const caution = require('./caution');
const requirement = require('./requirement');
const agelimit = require('./agelimit');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.User = user;
db.Post = post;
db.Comment = comment;
db.Image = image;
db.Category = category;
db.Community = community;
db.Caution = caution;
db.Requirement = requirement;
db.AgeLimit = agelimit;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
