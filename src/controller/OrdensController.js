const Pedido = require('../models/pedidos');

const PedidoController = {
  verTodos: async (req, res) => {
    try {
      const pedidos = await Pedido.findAll();
      res.json(pedidos);
    } catch (error) {
      console.error('Erro ao consultar pedidos:', error);
      res.status(500).json({ error: 'Erro ao consultar pedidos' });
    }
  },

  verPedido: async (req, res) => {
    try {
      const pedidoId = req.params.id;

      const pedido = await Pedido.findOne({
        where: { id: pedidoId },
      });

      if (pedido) {
        res.json(pedido);
      } else {
        res.status(404).json({ error: 'Pedido não encontrado' });
      }
    } catch (error) {
      console.error('Erro ao buscar pedido:', error);
      res.status(500).json({ error: 'Erro ao buscar pedido' });
    }
  },

  criarPedido: async (req, res) => {
    try {
      // Extrai os dados do corpo da solicitação JSON
      const { nome, cpf, telefone, email, plano, horario } = req.body;

      // Cria o pedido na tabela Pedido
      const pedido = await Pedido.create({ nome, cpf, telefone, email, plano, horario });

      res.status(201).json(pedido);
    } catch (error) {
      console.error('Erro ao criar pedido:', error);
      res.status(500).json({ error: 'Erro ao criar pedido' });
    }
  },

  atualizarPedido: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, cpf, telefone, email, plano, horario } = req.body;

      const pedido = await Pedido.findByPk(id);

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado.' });
      }

      pedido.nome = nome;
      pedido.cpf = cpf;
      pedido.telefone = telefone;
      pedido.email = email;
      pedido.plano = plano;
      pedido.horario = horario;

      await pedido.save();

      res.json(pedido);
    } catch (error) {
      console.error('Erro ao atualizar um pedido:', error);
      res.status(500).json({ error: 'Erro ao atualizar um pedido' });
    }
  },

  deletarPedido: async (req, res) => {
    try {
      const { id } = req.params;

      const pedido = await Pedido.findByPk(id);

      if (!pedido) {
        return res.status(404).json({ error: 'Pedido não encontrado.' });
      }

      await pedido.destroy();

      res.status(204).send();
    } catch (error) {
      console.error('Erro ao excluir um pedido:', error);
      res.status(500).json({ error: 'Erro ao excluir um pedido' });
    }
  },
};

module.exports = PedidoController;
