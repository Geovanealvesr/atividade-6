const { DataTypes } = require('sequelize');
const db = require('../database');
const Automobile = require('./Automobile');

const AutomobileDetails = db.define('AutomobileDetails', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  quilometragem: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  outrasCaracteristicas: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  automobile_id: { 
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: 'Automobile', 
      key: 'id',
    },
  },
}, {
  tableName: 'automobile_details',
});

(async () => {
  await AutomobileDetails.sync({ alter: true });
})();

module.exports = AutomobileDetails;
