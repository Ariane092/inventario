import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import Form from "../forms/Form";



function Cadastro(props) {
  const showPicBtn = true;
  
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
