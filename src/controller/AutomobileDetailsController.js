const {Automobile, AutomobileDetails} = require('../models');

const AutomobileDetailsController = {
  criarDetalhesAutomovel: async (req, res) => {
    try {
      const { quilometragem, cor, outrasCaracteristicas } = req.body;

      if (!quilometragem || !cor) {
        return res.status(400).json({ error: 'Informe quilometragem e cor.' });
      }

      const newDetails = await AutomobileDetails.create({
        quilometragem,
        cor,
        outrasCaracteristicas,
      });

      res.status(201).json(newDetails);
    } catch (error) {
      console.error('Erro ao criar detalhes de um automóvel:', error);
      res.status(500).send('Erro ao criar detalhes de um automóvel');
    }
  },

  atualizarDetalhesAutomovel: async (req, res) => {
    try {
      const { id } = req.params;
      const { quilometragem, cor, outrasCaracteristicas } = req.body;

      const details = await AutomobileDetails.findByPk(id);

      if (!details) {
        return res.status(404).json({ error: 'Detalhes de automóvel não encontrados.' });
      }

      details.quilometragem = quilometragem;
      details.cor = cor;
      details.outrasCaracteristicas = outrasCaracteristicas;

      await details.save();

      res.json(details);
    } catch (error) {
      console.error('Erro ao atualizar detalhes de um automóvel:', error);
      res.status(500).send('Erro ao atualizar detalhes de um automóvel');
    }
  },

  consultarDetalhesAutomovel: async (req, res) => {
    try {
      const details = await AutomobileDetails.findAll();
      res.json(details);
    } catch (error) {
      console.error('Erro ao consultar detalhes de automóveis:', error);
      res.status(500).send('Erro ao consultar detalhes de automóveis');
    }
  },

  deletarDetalhesAutomovel: async (req, res) => {
    try {
      const { id } = req.params;

      const details = await AutomobileDetails.findByPk(id);

      if (!details) {
        return res.status(404).json({ error: 'Detalhes de automóvel não encontrados.' });
      }

      await details.destroy();

      res.status(204).send();
    } catch (error) {
      console.error('Erro ao excluir detalhes de um automóvel:', error);
      res.status(500).send('Erro ao excluir detalhes de um automóvel');
    }
  },
};

module.exports = AutomobileDetailsController;
