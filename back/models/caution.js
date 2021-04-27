const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Caution extends Model {
  static init(sequelize) {
    return super.init(
      {
        text: {
          type: DataTypes.STRING(100),
          allowNull: true,
        },
      },
      {
        modelName: 'Caution',
        tableName: 'cautions',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Caution.belongsTo(db.Community);
  }
};
