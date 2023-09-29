const Funcionario = require('../models/funcionario');

const FuncionarioController = {
  criarFuncionario: async (req, res) => {
    try {
      const { codigoAcesso, senha } = req.body;

      
      await Funcionario.sync();

    
      const funcionarioExistente = await Funcionario.findOne({ where: { codigoAcesso } });

      if (funcionarioExistente) {
        return res.status(400).json({ error: 'Código de acesso já está em uso' });
      }

      
      const novoFuncionario = await Funcionario.create({ codigoAcesso, senha });

      res.status(201).json(novoFuncionario);
    } catch (error) {
      console.error('Erro ao criar funcionário:', error);
      res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
  },

  listarFuncionarios: async (req, res) => {
    try {
      // Busque todos os funcionários no banco de dados
      const funcionarios = await Funcionario.findAll();

      // Retorna a lista de funcionários em formato JSON
      res.json(funcionarios);
    } catch (error) {
      console.error('Erro ao listar funcionários:', error);
      res.status(500).json({ error: 'Erro ao listar funcionários' });
    }
  },

};

module.exports = FuncionarioController;
