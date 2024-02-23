import Select from "../forms/Select.js";
import Cadastro from "./Cadastro.js";
import Input from "../forms/Input.js";

function Computadores() {
  return (
    <Cadastro title="Cadastro de Computadores">
      <Select
        name="memoria"
        text="Memória"
        apiUrl="http://localhost:3001/memoria"
        // value={formData.memoria}
        // onChange={handleChange}
      />
      <Select
        name="hard_disk"
        text="Hard Disk"
        apiUrl="http://localhost:3001/hd"
        // value={formData.hard_disk}
        // onChange={handleChange}
      />
      <Select
        name="processador"
        text="Processador"
        apiUrl="http://localhost:3001/processador"
        // value={formData.processador}
        // onChange={handleChange}
      />
      <Select
        name="office"
        text="Office"
        apiUrl="http://localhost:3001/office"
        // value={formData.office}
        // onChange={handleChange}
      />
      <Select
        name="tipo_computadores"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/computadores"
        // value={formData.tipo_computadores}
        // onChange={handleChange}
      />
      <Input
        type="text"
        text="Configuração"
        name="configuracao"
        // value={formData.configuracao}
        // onChange={handleOnChange}
      />
    </Cadastro>
  );
}

export default Computadores;
