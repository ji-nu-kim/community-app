const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class AgeLimit extends Model {
  static init(sequelize) {
    return super.init(
      {
        age: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        modelName: 'AgeLimit',
        tableName: 'agelimits',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.AgeLimit.belongsTo(db.Community);
  }
};
