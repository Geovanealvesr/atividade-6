const Sequelize = require('sequelize');

const DB_NAME = "automobile";
const DB_USER = "root";
const DB_PASS = "";
const DB_CONFIG = {
    dialect: 'mysql', host:"127.0.0.1", port:3306
};


let conexao = {};

try {
    conexao = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG)
} catch (error) {
    console.error("erro ao se conectar!!")
}

async function temConexao(){
    try {
        await conexao.authenticate();
        console.log("Conectado!!")
    } catch (error) {
        console.log("Erro ao se conectar!!")
    }
};

Object.assign(conexao, {temConexao})

module.exports = conexao;