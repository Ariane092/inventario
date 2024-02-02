import { useState, useEffect } from "react";
import Select from "../forms/Select";
import Cadastro from "./Cadastro";

function Computadores() {
  const [options, setOptions] = useState(
    {
      memoria: [],
      hard_disk: [],
      processador: [],
      office: [],
    }
  );

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/computadores");
      const data = await response.json();
      const dataOptions = {
        memoria: data.map((item) => ({ id: item.memoria_id, name: item.memoria })),
        hard_disk: data.map((item) => ({ id: item.hard_disk_id, name: item.hard_disk })),
        processador: data.map((item) => ({ id: item.processador_id, name: item.processador })),
        office: data.map((item) => ({ id: item.office_id, name: item.office })),
      };

      setOptions(dataOptions);
    } catch (error) {
      console.error("Erro ao obter dados da API", error);
    }
  };
  fetchData();
}, []);

  return (
      <Cadastro title="Cadastro de Computadores">
        <Select name="memoria" text="Memória" options={options.memoria} />
        <Select name="hd" text="Hard Disk" options={options.hard_disk} />
        <Select name="processador" text="Processador" options={options.processador} />
        <Select name="office" text="Office" options={options.office} />
      </Cadastro>
  );
}

export default Computadores;
