const { DataTypes } = require('sequelize');
const db = require('../database');

const AutomobileDetails = db.define('AutomobileDetails', {
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
    allowNull: true, // Pode ser nulo se não houver informações adicionais
  },
}, {
  tableName: 'automobile_details'
});

(async () => {
  await AutomobileDetails.sync({ alter: true });
})();

module.exports = AutomobileDetails;
