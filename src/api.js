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

/*home table*/
app.get('/cadastro', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cadastro');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

/*visualizar/editar/duplicar*/
app.get('/cadastro/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const result = await pool.query('SELECT * FROM cadastro WHERE id = $1', [id]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

/*get selects*/
app.get('/responsavel', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM responsavel');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/projeto', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM projeto');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/status', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM status');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/memoria', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM memoria');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/hd', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM hard_disk');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/processador', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM processador');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/office', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM office');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/escritorio', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM tipo_escritorio');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/computadores', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM tipo_computadores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/impressoras', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM tipo_impressoras');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/monitores', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM tipo_monitores');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/equipamento', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM tipo_equipamento');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/marca', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM marca');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.get('/modelo', async (req, res) => {
  try {
    const result = await pool.query('SELECT nome FROM modelo');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

/*post selects*/
app.post('/responsavel', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO responsavel (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela responsavel', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/projeto', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO projeto (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela projeto', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/status', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO status (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela status', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/memoria', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO memoria (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela memoria', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/hd', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO hard_disk (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela hard_disk', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/processador', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO processador (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela processador', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/office', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO office (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela office', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/escritorio', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO tipo_escritorio (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela tipo_escritorio', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/computadores', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO tipo_computadores (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela tipo_computadores', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/impressoras', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO tipo_impressoras (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela tipo_impressoras', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/monitores', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO tipo_monitores (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela tipo_monitores', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/marca', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO marca (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela marca', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/modelo', async (req, res) => {
  try {
    const { nome } = req.body; 
    const result = await pool.query('INSERT INTO modelo (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados na tabela modelo', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.post('/cadastro', async (req, res) => {
  try {
    const { projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, 
      data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, configuracao, observacao, status } = req.body;

    const result = await pool.query('INSERT INTO cadastro (projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, configuracao, observacao, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING *', 
    [projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, configuracao, observacao, status]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir dados no banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

/*editar table*/
app.put('/cadastro/:id', async (req, res) => {
  const id = req.params.id; 
  try {
    const { projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, 
      data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, configuracao, observacao, status } = req.body;

    const result = await pool.query(
      'UPDATE cadastro SET projeto = $1, responsavel = $2, tipo_equipamento = $3, servicetag = $4, patrimonio = $5, marca = $6, modelo = $7, processo = $8, data_compra = $9, local = $10, usuario = $11, nota_fiscal = $12, cod_doacao = $13, memoria = $14, hard_disk = $15, processador = $16, office = $17, configuracao = $18, observacao = $19, status = $20 WHERE id = $21 RETURNING *',
      [projeto, responsavel, tipo_equipamento, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, configuracao, observacao, status, id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao atualizar dados no banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});


