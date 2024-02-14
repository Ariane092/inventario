import Cadastro from "./Cadastro";
import Select from "../forms/Select";

function Escritorio() {
  return (
    <Cadastro title="Cadastro Itens de Escritório">
      <Select
        name="tipo_escritorio"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/api/escritorio"
      />
    </Cadastro>
  );
}

export default Escritorio;
