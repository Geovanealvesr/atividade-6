const express = require('express');
const routes = express.Router();

routes.get("/", (req, res) => {res.send('get funcionou')});
routes.post("/criar", (req, res) => {})

module.exports = routes;