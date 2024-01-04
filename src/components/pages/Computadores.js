// import { useState, useEffect } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import Container from "../forms/Container";
import styles from "./Cadastro.module.css";
import categories from "./dbCadastro";
import Cadastro from "./Cadastro";

function Computadores() {
  return (
    <Container title="Cadastro de Computadores" btnText="Enviar">
      <Cadastro>
        <div>
          <Select name="memoria" text="Memória" options={categories} />
          <Select name="hd" text="Hard Disk" options={categories} />
        </div>
        <div>
        <Select name="processador" text="Processador" options={categories} />
          <Select name="office" text="Office" options={categories} />
        </div>
      </Cadastro>
    </Container>
  );
}

export default Computadores;
