const { DataTypes } = require('sequelize');
const db = require('../database');

const Funcionario = db.define('Funcionario', {
  codigoAcesso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'funcionarios',
  schema: 'funcionario', 
});

module.exports = Funcionario;
