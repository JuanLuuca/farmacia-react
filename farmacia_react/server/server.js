const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Array em memória para armazenar os medicamentos (substitua por um banco de dados em um ambiente de produção)
let medicamentos = [];

// Rota para obter todos os medicamentos
app.get('/medicamentos', (req, res) => {
  res.json(medicamentos);
});

// Rota para adicionar um novo medicamento
app.post('/medicamentos', (req, res) => {
  const novoMedicamento = req.body;
  medicamentos.push(novoMedicamento);
  res.status(201).json(novoMedicamento);
});

// Rota para deletar um medicamento
app.delete('/medicamentos/:id', (req, res) => {
  const medicamentoId = req.params.id;
  medicamentos = medicamentos.filter((medicamento) => medicamento.id !== medicamentoId);
  res.sendStatus(204);
});

// Inicie o servidor
app.listen(4000, () => {
  console.log('Servidor iniciado na porta 4000');
});
