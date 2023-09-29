const express = require('express');

const routes = require('./routes/index');
const conexao = require('./database');

const app = express();

conexao.temConexao();

app.use(express.json());
app.use(routes);

app.listen(2000, () => console.log('rodou aqui na porta 2000'));
