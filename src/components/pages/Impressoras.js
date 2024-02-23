import Cadastro from "./Cadastro.js";
import Select from "../forms/Select.js";

function Impressoras() {
  return (
    <Cadastro title="Cadastro de Impressoras">
      <Select
        name="tipo_impressoras"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/impressoras"
      />
    </Cadastro>
  );
}

export default Impressoras;
