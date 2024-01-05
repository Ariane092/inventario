// import { useState, useEffect } from "react";
import Select from "../forms/Select";
import categories from "./dbCadastro";
import Cadastro from "./Cadastro";

function Computadores() {
  return (
      <Cadastro title="Cadastro de Computadores">
        <Select name="memoria" text="Memória" options={categories} />
        <Select name="hd" text="Hard Disk" options={categories} />
        <Select name="processador" text="Processador" options={categories} />
        <Select name="office" text="Office" options={categories} />
      </Cadastro>
  );
}

export default Computadores;
