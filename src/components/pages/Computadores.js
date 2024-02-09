import Select from "../forms/Select";
import Cadastro from "./Cadastro";

function Computadores() {
  
  return (
      <Cadastro title="Cadastro de Computadores">
        <Select name="memoria" text="Memória" apiUrl="http://localhost:3001/api/memoria" />
        <Select name="hard_disk" text="Hard Disk" apiUrl="http://localhost:3001/api/hd" />
        <Select name="processador" text="Processador" apiUrl="http://localhost:3001/api/processador" />
        <Select name="office" text="Office" apiUrl="http://localhost:3001/api/office" />
        <Select name="tipo_computadores" text="Tipo de Produto" apiUrl="http://localhost:3001/api/computadores" />     
      </Cadastro>
  );
}

export default Computadores;

