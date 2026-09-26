const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  return res.json({ status: 'API rodando com sucesso!' });
});

app.get('/api/funcionarios', async (req, res) => {
  try {
    const funcionarios = await prisma.funcionario.findMany({
      include: { obras: true }
    });
    return res.json({ sucesso: true, dados: funcionarios });
  } catch (error) {
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
});

app.post('/api/funcionarios', async (req, res) => {
  try {
    const { nome, cargo } = req.body;
    if (!nome || !cargo) {
      return res.status(400).json({ sucesso: false, erro: 'Nome e cargo são obrigatórios.' });
    }
    const novoFuncionario = await prisma.funcionario.create({
      data: { nome, cargo }
    });
    return res.status(201).json({ sucesso: true, dados: novoFuncionario });
  } catch (error) {
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
});

app.get('/api/obras', async (req, res) => {
  try {
    const obras = await prisma.obra.findMany({
      include: { funcionario: true }
    });
    return res.json({ sucesso: true, dados: obras });
  } catch (error) {
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
});

app.post('/api/obras', async (req, res) => {
  try {
    const { nome, localizacao, funcionarioId } = req.body;
    if (!nome || !localizacao) {
      return res.status(400).json({ sucesso: false, erro: 'Nome e localização são obrigatórios.' });
    }
    const novaObra = await prisma.obra.create({
      data: {
        nome,
        localizacao,
        funcionarioId: funcionarioId ? Number(funcionarioId) : null
      }
    });
    return res.status(201).json({ sucesso: true, dados: novaObra });
  } catch (error) {
    return res.status(500).json({ sucesso: false, erro: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});