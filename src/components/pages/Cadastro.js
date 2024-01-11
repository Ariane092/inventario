import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import categories from "./CadastroData";
import Form from "../forms/Form";

function Cadastro(props) {
  const showPicBtn = true;

  const [categories, setCategories] = useState([]);

  return (
    <>
      <Form title={props.title} text="Enviar" showPicBtn={showPicBtn}>
        <Input type="number" text="Núm. Equipamento" name="equipamento" />
        <Input type="text" text="Processo" name="processo" />
        <Input type="date" text="Data Compra" name="data_compra" />
        <Select
          name="responsavel"
          text="Responsável"
          options={[categories.responsavel]}
        />
        <Input type="text" text="Local" name="local" />
        <Input
          type="text"
          text="Usuário"
          name="usuario"
          placeholder="Caso não possua, digite ROTATIVO"
        />
        <Select
          name="marca_modelo"
          text="Marca/modelo"
          options={categories}
        />
        <Input type="number" text="NF" name="nota_fiscal" />
        <Input type="number" text="Cód. Doação" name="cod_doacao" />
        <Select
          name="tipo_produto"
          text="Tipo de Produto"
          options={categories.tipoProduto}
        />
        <Input type="number" text="Patrimônio" name="patrimonio" />
        <Select name="projeto" text="Projeto" options={categories.projeto} />
        <Select name="status" text="Status" options={categories} />
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
