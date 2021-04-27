const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Category extends Model {
  static init(sequelize) {
    return super.init(
      {
        name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        profilePhoto: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
      },
      {
        modelName: 'Category',
        tableName: 'categories',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Category.belongsToMany(db.Community, {
      through: 'COMMUNITY_CATEGORY',
    });
    db.Category.belongsToMany(db.User, {
      through: 'CATEGORY_USER',
    });
  }
};
