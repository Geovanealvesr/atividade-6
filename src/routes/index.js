const express = require('express');
const AutomobileController = require('../controller/AutomobileController');
const AutomobileDetailsController = require('../controller/AutomobileDetailsController');
const routes = express.Router();

routes.get('/automobile', AutomobileController.consultarVeiculo);
routes.post('/automobile', AutomobileController.criarVeiculo);
routes.put('/automobile/:id', AutomobileController.atualizarVeiculo);
routes.delete('/automobile/:id', AutomobileController.deletarVeiculo);

routes.get('/automobile-details', AutomobileDetailsController.consultarDetalhesAutomovel);
routes.post('/automobile-details', AutomobileDetailsController.criarDetalhesAutomovel);
routes.put('/automobile-details/:id', AutomobileDetailsController.atualizarDetalhesAutomovel);
routes.delete('/automobile-details/:id', AutomobileDetailsController.deletarDetalhesAutomovel);

module.exports = routes;
