import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import Form from "../forms/Form";

function Cadastro(props) {
  const showPicBtn = true;
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/cadastro");
        const data = await response.json();
        setOptions(data);
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
        {/* <Select
          name="responsavel"
          text="Responsável"
          option={options.responsavel}
        /> */}
        <Input type="text" text="Local" name="local" />
        <Input
          type="text"
          text="Usuário"
          name="usuario"
          placeholder="Caso não possua, digite ROTATIVO"
        />
        {/* <select
        name = 'responsavel'
      >
        {options.map((option) => (
          <option  value ={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select> */}
        <select id={column.id + "list"}>
          {options.map((value) => (
            <option value={value} key={value} />
          ))}
        </select>
        {/* <Select
          name="marca_modelo"
          text="Marca/modelo"
          option={options}
        /> */}
        <Input type="number" text="NF" name="nota_fiscal" />
        <Input type="number" text="Cód. Doação" name="cod_doacao" />
        {/* <Select
          name="tipo_produto"
          text="Tipo de Produto"
          option={options.tipo}
        /> */}
        <Input type="number" text="Patrimônio" name="patrimonio" />
        {/* <Select name="projeto" text="Projeto" option={options.projeto} />
        <Select name="status" text="Status" option={options.status} /> */}
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
