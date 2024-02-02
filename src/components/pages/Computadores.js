import { useState, useEffect } from "react";
import Select from "../forms/Select";
import Cadastro from "./Cadastro";

function Computadores() {
  const [options, setOptions] = useState({
    memoria: [{

    }],
    hard_disk: [{

    }],
    processador: [{

    }],
    office: [{
      
    }],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/computadores");
        const data = await response.json();
  
        const dataOptions = {
          memoria: extractOptions(data, 'memoria'),
          hard_disk: extractOptions(data, 'hard_disk'),
          processador: extractOptions(data, 'processador'),
          office: extractOptions(data, 'office'),
        };
  
        setOptions(dataOptions);
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, []);
  
  const extractOptions = (data, columnName) => {
    return data.map((item) => ({ id: item[columnName], name: item[columnName] }));
  };
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
