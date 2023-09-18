const { DataTypes } = require('sequelize');
const db = require('../database');

const Automobile = db.define('Automobile', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
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

