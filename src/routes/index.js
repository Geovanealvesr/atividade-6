const express = require('express');
const PedidoController = require('../controller/OrdensController'); 
const FuncionarioController = require('../controller/FuncionariosController'); 

const routes = express.Router();

// Rotas para pedidos
routes.get('/pedidos', PedidoController.verTodos);
routes.get('/pedidos/:id', PedidoController.verPedido);
routes.post('/pedidos', PedidoController.criarPedido);
routes.put('/pedidos/:id', PedidoController.atualizarPedido);
routes.delete('/pedidos/:id', PedidoController.deletarPedido);

// Rotas para funcionários
routes.get('/funcionario', FuncionarioController.listarFuncionarios);
routes.post('/funcionario', FuncionarioController.criarFuncionario);

module.exports = routes;
