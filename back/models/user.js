const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(30),
          allowNull: false, // 필수사항
          unique: true,
        },
        nickname: {
          type: DataTypes.STRING(30),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        country: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        profilePhoto: {
          type: DataTypes.STRING(200),
          allowNull: true,
        },
      },
      {
        modelName: 'User',
        tableName: 'users',
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 설정
        sequelize,
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Post);
    db.User.hasMany(db.Comment);
    // 내가 만든 커뮤니티
    db.User.hasMany(db.Community, { as: 'Owned', foreignKey: 'OwnerId' });
    // 다른 커뮤니티
    db.User.belongsToMany(db.Community, {
      through: 'COMMUNITY_USER',
    });
    db.User.belongsToMany(db.Category, {
      through: 'CATEGORY_USER',
    });
    db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });
  }
};
