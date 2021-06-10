const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Meet extends Model {
  static init(sequelize) {
    return super.init(
      {
        place: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        fee: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        members: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        modelName: 'Meet',
        tableName: 'Meets',
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
