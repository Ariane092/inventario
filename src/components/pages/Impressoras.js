import Cadastro from "./Cadastro";
import Select from "../forms/Select";

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
