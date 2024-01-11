import "./Home.css";
import { IoSearch } from "react-icons/io5";

function Home() {
  return (
    <div className="table-container">
      <h4>Lista de Equipamentos</h4>
      <div className="search-itens">
        <label>Exibir itens</label>
        <select></select>
        <input placeholder="Pesquisar"></input>
      </div>
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
  );
}

export default Home;
