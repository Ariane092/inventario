// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import categories from "./dbCadastro";
import Button from "../forms/Button"
function Cadastro(props) {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <p>{props.title}</p>
          <Input type="number" text="Núm. Equipamento" name="equipamento" />
          <Input type="text" text="Processo" name="processo" />
          <Input type="date" text="Data Compra" name="data_compra" />
          <Select name="responsavel" text="Responsável" options={categories} />
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
            options={categories}
          />
          <Input type="number" text="Patrimônio" name="patrimonio" />
          <Select name="projeto" text="Projeto" options={categories} />
          <Select name="status" text="Status" options={categories} />
          <Input type="text" text="Service Tag" name="service_tag" />
          {props.children} {/*computadores props*/}

          <div className={styles.obs_box}>
            <label>Observação</label>
            <textarea></textarea>
          </div>
          <div className={styles.form_btn}> 
          <Button text="Enviar" />
          <Button text="Tirar Foto" />
        </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
