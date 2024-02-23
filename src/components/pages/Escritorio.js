import Cadastro from "./Cadastro.js";
import Select from "../forms/Select.js";

function Escritorio() {
  return (
    <Cadastro title="Cadastro Itens de Escritório">
      <Select
        name="tipo_escritorio"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/escritorio"
      />
    </Cadastro>
  );
}

export default Escritorio;
