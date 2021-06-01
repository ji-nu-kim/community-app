const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Notice extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(140),
          allowNull: false,
        },
        content: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        variety: {
          // 커뮤니티 가입알림은 'Join', 일반 알림은 'Normal', 중요 알림은 'Important' 등
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        modelName: 'Notice',
        tableName: 'notices',
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Notice.belongsTo(db.User);
  }
};
