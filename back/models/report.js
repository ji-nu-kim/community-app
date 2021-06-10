const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Report extends Model {
  static init(sequelize) {
    return super.init(
      {
        reason: {
          type: DataTypes.STRING(140),
          allowNull: false,
        },
        reporter: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        reportedPerson: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        modelName: 'Report',
        tableName: 'reports',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Report.belongsToMany(db.Post, {
      through: 'REPORT_POST',
    });
    db.Report.belongsToMany(db.Comment, {
      through: 'REPORT_COMMENT',
    });
  }
};
