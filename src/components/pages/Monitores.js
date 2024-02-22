import Cadastro from "./Cadastro";
import Select from "../forms/Select";

function Monitores() {
  return (
    <Cadastro title="Cadastro de Monitores">
      <Select
        name="tipo_monitores"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/monitores"
      />
    </Cadastro>
  );
}

export default Monitores;
