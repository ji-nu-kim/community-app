const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Meet extends Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        place: {
          type: DataTypes.STRING(30),
          allowNull: false,
        },
        fee: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        members: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        date: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
      },
      {
        modelName: 'Meet',
        tableName: 'meets',
        charset: 'utf8',
        collate: 'utf8_general_ci',
        sequelize,
      }
    );
  }

  static associate(db) {
    db.Meet.belongsTo(db.User, { as: 'MeetOwned', foreignKey: 'MeetOwnerId' });
    db.Meet.belongsTo(db.Community);
    db.Meet.belongsToMany(db.User, {
      through: 'MEET_USER',
    });
  }
};
