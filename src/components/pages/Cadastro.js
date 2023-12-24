// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import SubmitButton from "../forms/SubmitButton";
import styles from "./Cadastro.module.css";

function Cadastro({ handleSubmit, btnText, projectData }) {
  return (
    <div className={styles.container}>
      <h4>Cadastro de Equipamentos</h4>
      <form className={styles.form}>
        <div>
          <Input type="number" text="Equipamento" name="equipamento" />
          <Input type="text" text="Processo" name="processo" />
          <Input type="date" text="Data Compra" name="data_compra" />
          <Select
            name="responsavel"
            text="Responsável" // options={categories}
          />
          <Input type="text" text="Local" name="local" />
          <Input
            type="text"
            text="Utilizador"
            name="utilizador"
            placeholder="Caso não possua, digite ROTATIVO"
          />
          <Select
            name="marca_modelo"
            text="Marca/modelo"
            // options={categories}
          />
          <Input type="text" text="Observação" name="observacao" />
        </div>
        <div className={styles.form_box}>
          <Input type="number" text="NF" name="nota_fiscal" />
          <Input type="number" text="Cód. Doação" name="cod_doacao" />
          <Select
            name="tipo_produto"
            text="Tipo de Produto"
            // options={categories}
          />
          <Input type="number" text="Patrimônio" name="patrimonio" />
          <Select
            name="projeto"
            text="Projeto"
            // options={categories}
          />
          <Select
            name="status"
            text="Status"
            // options={categories}
          />
          <Input type="text" text="Service Tag" name="service_tag" />
        </div>
      </form>
      <SubmitButton text="Enviar"/>
    </div>
  );
}

export default Cadastro;
