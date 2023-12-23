// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import SubmitButton from "../forms/SubmitButton";
import styles from "./Cadastro.module.css";

function Cadastro({ handleSubmit, btnText, projectData }) {
  return (
    
    <form className={styles.form}>
        <h4>Cadastro de Equipamentos</h4>
      <div>
        <Input type="number" text="Equipamento" name="equipamento" />
        <Input type="text" text="Processo" name="processo" />
        <Input type="date" text="Data Compra" name="data_compra" />
        <Select
          name="responsavel"
          text="Selecione o responsável" // options={categories}
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
          text="Selecione a marca/modelo"
          // options={categories}
        />
      </div>
      <div className={styles.form_box}>
        <Input type="number" text="NF" name="nota_fiscal" />
        <Input type="number" text="Cód. Doação" name="cod_doacao" />
        <Select
          name="tipo_produto"
          text="Selecione o tipo do produto"
          // options={categories}
        />
        <Input type="number" text="Patrimônio" name="patrimonio" />
        <Select
          name="projeto"
          text="Selecione o projeto"
          // options={categories}
        />
        <Select
          name="status"
          text="Selecione o status"
          // options={categories}
        />
        <Input type="number" text="Service Tag" name="service_tag" />
      </div>
      <div className={styles.obs_box}>
        <Input type="text" text="Observação" name="observacao" />
      </div>

      <SubmitButton text={btnText} />
    </form>
  );
}

export default Cadastro;
