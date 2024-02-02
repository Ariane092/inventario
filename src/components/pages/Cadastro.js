import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import Form from "../forms/Form";



function Cadastro(props) {
  const showPicBtn = true;
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
        memoria: data.map((item) => ({ id: item.memoria_id, name: item.memoria_name })),
        hard_disk: data.map((item) => ({ id: item.hard_disk_id, name: item.hard_disk_name })),
        processador: data.map((item) => ({ id: item.processador_id, name: item.processador_name })),
        office: data.map((item) => ({ id: item.office_id, name: item.office_name })),
      };

      setOptions(dataOptions);
    } catch (error) {
      console.error("Erro ao obter dados da API", error);
    }
  };
  fetchData();
}, []);
  

  return (
    <>
      <Form title={props.title} text="Enviar" showPicBtn={showPicBtn}>
        <Input type="number" text="Núm. Equipamento" name="equipamento" />
        <Input type="text" text="Processo" name="processo" />
        <Input type="date" text="Data Compra" name="data_compra" />
        <Select
          name="responsavel"
          text="Responsável"
          options={options.responsavel}
        />
        <Input type="text" text="Local" name="local" />
        <Input
          type="text"
          text="Usuário"
          name="usuario"
          placeholder="Caso não possua, digite ROTATIVO"
        />
        {/* <Select
          name="marca_modelo"
          text="Marca/modelo"
          options={options}
        /> */}
        <Input type="number" text="NF" name="nota_fiscal" />
        <Input type="number" text="Cód. Doação" name="cod_doacao" />
        <Select
          name="tipo_produto"
          text="Tipo de Produto"
          options={options.tipo}
        />
        <Input type="number" text="Patrimônio" name="patrimonio" />
        <Select name="projeto" text="Projeto" options={options.projeto} />
        <Select name="status" text="Status" options={options.status} />
        <Input type="text" text="Service Tag" name="service_tag" />
        {props.children} {/*computadores props*/}

        <div className={styles.obs_box}>
          <label>Observação:</label>
          <textarea></textarea>
        </div>
      </Form>
    </>
  );
}

export default Cadastro;
