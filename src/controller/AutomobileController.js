const {Automobile, AutomobileDetails} = require('../models');

const AutomobileController = {
  

    verTodos: async (req, res) => {
      try {
        const automobileId = req.params.id; // Obtenha o ID do veículo a partir dos parâmetros da URL
    
        const automobile = await Automobile.findOne({
          where: { id: automobileId },
          include: [{ model: AutomobileDetails }],
        });
    
        if (automobile) {
          res.json(automobile);
        } else {
          res.status(404).json({ error: 'Veículo não encontrado' });
        }
      } catch (error) {
        console.error('Erro ao buscar veículo:', error);
        res.status(500).json({ error: 'Erro ao buscar veículo' });
      }
    },

    criarVeiculo: 
    async (req, res) => {
      try {
        // Extrai os dados do corpo da solicitação JSON
        const { marca, modelo, ano, placa, quilometragem, cor } = req.body;
    
        // Cria o veículo na tabela Automobile
        const automobile = await Automobile.create({ marca, modelo, ano, placa });
    
        // Cria os detalhes do veículo na tabela AutomobileDetails
        const automobileDetails = await AutomobileDetails.create({
          quilometragem,
          cor,
          automobile_id: automobile.id, // Associe os detalhes ao veículo recém-criado
        });
    
        res.status(201).json({ automobile, automobileDetails });
      } catch (error) {
        console.error('Erro ao criar veículo com detalhes:', error);
        res.status(500).json({ error: 'Erro ao criar veículo com detalhes' });
      }
    },
    
    atualizarVeiculo: async (req, res) => {
        try {
          const { id } = req.params;
          const { marca, modelo, ano, placa } = req.body;
      
          const automobile = await Automobile.findByPk(id);
      
          if (!automobile) {
            return res.status(404).json({ error: 'Automóvel não encontrado.' });
          }
      
          automobile.marca = marca;
          automobile.modelo = modelo;
          automobile.ano = ano;
          automobile.placa = placa;
      
          await automobile.save();
      
          res.json(automobile);
        } catch (error) {
          console.error('Erro ao atualizar um automóvel:', error);
          res.status(500).send('Erro ao atualizar um automóvel');
        }
      },

    consultarVeiculo: async (req, res) => {
        try {
          const automobiles = await Automobile.findAll();
          res.json(automobiles);
        } catch (error) {
          console.error('Erro ao consultar automóveis:', error);
          res.status(500).send('Erro ao consultar automóveis');
        }
      },

    deletarVeiculo: async (req, res) => {
        try {
          const { id } = req.params;
      
          const automobile = await Automobile.findByPk(id);
      
          if (!automobile) {
            return res.status(404).json({ error: 'Automóvel não encontrado.' });
          }
      
          await automobile.destroy();
      
          res.status(204).send();
        } catch (error) {
          console.error('Erro ao excluir um automóvel:', error);
          res.status(500).send('Erro ao excluir um automóvel');
        }
      },

     

    
};

module.exports = AutomobileController;