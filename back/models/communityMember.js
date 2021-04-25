const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class CommunityMember extends Model {
  static init(sequelize) {
    return super.init(
      {},
      {
        modelName: 'CommunityMember',
        tableName: 'communitymembers',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }
  static associate(db) {}
};
