const Sequelize = require('sequelize');

const DB_NAME = "conexos";
const DB_USER = "root";
const DB_PASS = "1234";
const DB_CONFIG = {
    dialect: 'mysql',
    host: "127.0.0.1",
    port: 3306,
    schema: 'public',
};

let conexao = {};

try {
    conexao = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao se conectar!!");
}

async function temConexao() {
    try {
        await conexao.authenticate();
        console.log("Conectado!!");
    } catch (error) {
        console.log("Erro ao se conectar!!");
    }
}

Object.assign(conexao, { temConexao });

module.exports = conexao;
