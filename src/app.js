const express = require('express');
const routes = require('./routes');
const app = express();

app.use(routes);

app.listen(2000, () => console.log('rodou aqui na porta 2000'));
