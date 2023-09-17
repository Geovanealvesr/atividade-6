const AutomobileController = {
    criarVeiculo: 
        async (req, res) => {
            try {
              const { marca, modelo, ano, placa } = req.body;
          
              if (!marca || !modelo || !ano || !placa) {
                return res.status(400).json({ error: 'Informe marca, modelo, ano e placa.' });
              }
          
              const newAutomobile = await Automobile.create({
                marca,
                modelo,
                ano,
                placa,
              });
          
              res.status(201).json(newAutomobile);
            } catch (error) {
              console.error('Erro ao criar um automóvel:', error);
              res.status(500).send('Erro ao criar um automóvel');
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

      teste: (req, res) => {
        res.send("funcionou o controller");
      }

    
};

module.exports = AutomobileController;