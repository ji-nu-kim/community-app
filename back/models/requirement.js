const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Requirement extends Model {
  static init(sequelize) {
    return super.init(
      {
        text: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: 'Requirement',
        tableName: 'requirements',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Requirement.belongsTo(db.Community);
  }
};
