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

app.get('/api/computadores', async (req, res) => {
  try {
    const result = await pool.query('SELECT memoria, hard_disk, processador, office FROM inventario_teste');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao obter dados do banco de dados', error);
    res.status(500).send('Erro interno do servidor');
  }
});

// app.post('/api/computadores', async (req, res) => {
//   try {
//     const { projeto, responsavel, tipo, servicetag, patrimonio, marca, modelo, processo, 
//       data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, observacao, status } = req.body;

//     const result = await pool.query('INSERT INTO inventario_teste (projeto, responsavel, tipo, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, observacao, status) VALUES ($1, $2) RETURNING *', 
//     [projeto, responsavel, tipo, servicetag, patrimonio, marca, modelo, processo, data_compra, local, usuario, nota_fiscal, cod_doacao, memoria, hard_disk, processador, office, observacao, status]);
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error('Erro ao inserir dados no banco de dados', error);
//     res.status(500).send('Erro interno do servidor');
//   }
// });

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

