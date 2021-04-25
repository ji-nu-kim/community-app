const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Community extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
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
    db.Community.hasMany(db.Category);
    db.Community.hasMany(db.Post);
    db.Community.belongsToMany(db.User, {
      through: db.CommunityMember,
      as: 'Members',
    });
  }
};
