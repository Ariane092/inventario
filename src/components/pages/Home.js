import "./Home.css";
import { useState } from "react";
import {
  BsDisplay,
  BsLaptop,
  BsPrinter,
  BsSearch
} from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";

function Home() {

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  }

  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>

      <div className="search-itens">
        <div>
          <label>Exibir itens</label>
          <select></select>
        </div>
        <div>
          <BsSearch className="search-icon" />
          <input placeholder="Pesquisar"></input>
        </div>
      </div>

      <div className="bloc-tabs">
        <div className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}><BsLaptop /></div>

        <div className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}><BsPrinter /></div>

        <div className={toggle === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}><BsDisplay /></div>

        <div className={toggle === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}><PiOfficeChair /></div>
      </div>

      <div className={toggle === 1 ? "show-content" : "content"}>
        <table>
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
          </tr>
          <tbody>
            {/* {dados.map(item => (
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
          ))} */}
          
          </tbody>
        </table>

        <div className={toggle === 2 ? "show-content" : "content"}>
          <table>
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
            </tr>
            <tbody>
              {/* {dados.map(item => (
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
          ))} */}
            </tbody>
          </table>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <table>
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
            </tr>
            <tbody>
              {/* {dados.map(item => (
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
          ))} */}
            </tbody>
          </table>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
          <table>
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
            </tr>
            <tbody>
              {/* {dados.map(item => (
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
          ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
