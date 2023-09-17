const { DataTypes } = require('sequelize');
const db = require('../database');


const Automobile = db.define('Automobile', {
  marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: 'automobile' 
});

(async () => {
  await Automobile.sync({ alter: true }); 
})();

module.exports = Automobile;
