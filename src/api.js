const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'gkr2090',
  port: 5432,
});

app.get('/api/home', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM inventario_teste');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/api/home', async (req, res) => {
  try {
    const { nome, quantidade } = req.body;

    const result = await pool.query('INSERT INTO inventario_teste (nome, quantidade) VALUES ($1, $2) RETURNING *', [nome, quantidade]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

