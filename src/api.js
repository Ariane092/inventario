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

app.get('/api/cadastro', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cadastro');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/responsavel', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM responsavel');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/projeto', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projeto');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/status', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM status');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/memoria', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM memoria');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/hd', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hard_disk');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/processador', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM processador');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/office', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM office');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/escritorio', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_escritorio');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/computadores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_computadores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/impressoras', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_impressoras');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/api/monitores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_monitores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/api/cadastro', async (req, res) => {
  try {
    const { projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, 
      data_compra, local, usuario, nota_fiscal, cod_doacao, observacao, status } = req.body;

    const result = await pool.query('INSERT INTO cadastro (projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, observacao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *', 
    [projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, observacao, status]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

