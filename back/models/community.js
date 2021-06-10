const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Community extends Model {
  static init(sequelize) {
    return super.init(
      {
        communityName: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.STRING(140),
          allowNull: false,
        },
        profilePhoto: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
        country: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        caution: {
          type: DataTypes.STRING(140),
          allowNull: true,
        },
        requirement: {
          type: DataTypes.STRING(140),
          allowNull: true,
        },
      },
      {
        modelName: 'Community',
        tableName: 'communities',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Community.belongsTo(db.User, { as: 'Owner', foreignKey: 'OwnerId' });
    db.Community.hasMany(db.Post);
    db.Community.hasMany(db.Meet);
    db.Community.belongsToMany(db.User, {
      through: 'COMMUNITY_USER',
    });
    db.Community.belongsToMany(db.User, {
      through: 'COMMUNITY_JOIN',
      as: 'JoinUsers',
    });
    db.Community.belongsToMany(db.Category, {
      through: 'COMMUNITY_CATEGORY',
    });
  }
};
