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
        checked: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
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
