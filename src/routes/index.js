const express = require('express');
const AutomobileController = require('../controller/AutomobileController');
const routes = express.Router();

routes.get("/teste", (req, res) => {
  AutomobileController.teste(req, res); // Chame a função teste do controlador
});

routes.post("/criar", async (req, res) => {
  await AutomobileController.criarVeiculo(req, res); // Chame a função criarVeiculo do controlador
});

routes.put("/atualizar", async (req, res) => {
  await AutomobileController.atualizarVeiculo(req, res); // Chame a função atualizarVeiculo do controlador
});

routes.delete("/deletar", async (req, res) => {
  await AutomobileController.deletarVeiculo(req, res); // Chame a função deletarVeiculo do controlador
});

module.exports = routes;
