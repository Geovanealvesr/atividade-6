const { DataTypes } = require('sequelize');
const db = require('../database');

const Pedidos = db.define('Pedidos', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plano: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  horario: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'pedidos',
  schema: 'ordens', 
});

(async () => {
  await Pedidos.sync({ alter: true });
})();

module.exports = Pedidos;
