import "./Home.css";
import React, { useState, useEffect } from 'react';
import {
  BsDisplay,
  BsLaptop,
  BsPrinter,
  BsSearch
} from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";

function Home() {

  const [dados, setDados] = useState([]);
  const [linhasExibidas, setLinhasExibidas] = useState(10);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const handleSelecionarLinhas = (event) => {
    const quantidadeLinhas = parseInt(event.target.value, 10);
    setLinhasExibidas(quantidadeLinhas);
    setPaginaAtual(1); 
  };

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const handleProximaPagina = () => {
    const totalPages = Math.ceil(dados.length / linhasExibidas);
    if (paginaAtual < totalPages) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const indiceInicial = (paginaAtual - 1) * linhasExibidas;
  const indiceFinal = indiceInicial + linhasExibidas;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/home');
        const data = await response.json();
        console.log('Resposta da API:', data);
        setDados(data);
      } catch (error) {
        console.error('Erro ao obter dados da API', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>

      <div className="search-itens">
        <select onChange={handleSelecionarLinhas}>
            <option value="10">Exibir 10 linhas</option>
            <option value="30">Exibir 30 linhas</option>
            <option value="100">Exibir 100 linhas</option>
          </select>
        <div>
          
          <BsSearch className="search-icon" />
          <input placeholder="Pesquisar"></input>
        </div>
      </div>

      <div className="bloc-tabs">
        <div className="tabs"><BsLaptop /></div>

        <div className="tabs"><BsPrinter /></div>

        <div className="tabs"><BsDisplay /></div>

        <div className="tabs"><PiOfficeChair /></div>
      </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Projeto</th>
              <th>Responsável</th>
              <th>Tipo</th>
              <th>S/N</th>
              <th>Patrimônio</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Configuração</th>
              <th>Status</th>
              <th>Visualizar</th>
            </tr>
          </thead>
          <tbody>
          {dados.slice(0, linhasExibidas).map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.projeto}</td>
                <td>{item.responsavel}</td>
                <td>{item.tipo}</td>
                <td>{item.servicetag}</td>
                <td>{item.patrimonio}</td>
                <td>{item.marca}</td>
                <td>{item.modelo}</td>
                <td>{item.configuracao}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
        <button onClick={handlePaginaAnterior} disabled={paginaAtual === 1}>
          Anterior
        </button>
        <span>Página {paginaAtual}</span>
        <button onClick={handleProximaPagina} disabled={paginaAtual === Math.ceil(dados.length / linhasExibidas)}>
          Próxima
        </button>
      </div>

    </div>
  );
}

export default Home;
