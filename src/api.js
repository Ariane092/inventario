import express from 'express';
import pg from 'pg';
import cors from 'cors';

const app = express();
const port = 3001;

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'gkr2090',
  port: 5432,
});

app.use(cors());
app.use(express.json());

app.get('/cadastro', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cadastro');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/responsavel', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM responsavel');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/projeto', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projeto');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/status', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM status');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/memoria', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM memoria');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/hd', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM hard_disk');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/processador', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM processador');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/office', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM office');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/escritorio', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_escritorio');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/computadores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_computadores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/impressoras', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_impressoras');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/monitores', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tipo_monitores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/marca', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM marca');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/modelo', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM modelo');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/cadastro', async (req, res) => {
  try {
    const { projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, 
      data_compra, local, usuario, nota_fiscal, cod_doacao, configuracao, observacao, status } = req.body;

    const result = await pool.query('INSERT INTO cadastro (projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, configuracao, observacao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *', 
    [projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, configuracao, observacao, status]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

