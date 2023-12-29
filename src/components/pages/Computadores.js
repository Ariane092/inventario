// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Container from "../forms/Container";
import Form from "../forms/Form";
import styles from "./Cadastro.module.css";
import categories from "./dbCadastro";

function Computadores() {
  return (
    <Container title="Cadastro de Computadores" btnText="Enviar">
      <Form>
        <div className={styles.form_box}>
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
          <Select name="memoria" text="Memória" options={categories} />
          <Select name="hd" text="Hard Disk" options={categories} />
        </div>
        <div className={styles.form_box}>
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
          <Select name="processador" text="Processador" options={categories} />
          <Select name="office" text="Office" options={categories} />
        </div>
        <div className={styles.obs_box}> 
          <label>Observação:</label>
          <textarea></textarea>
        </div>
      </Form>
    </Container>
  );
}

export default Computadores;
