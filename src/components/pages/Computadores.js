import { useState, useEffect } from "react";
import Select from "../forms/Select";
import Cadastro from "./Cadastro";

function Computadores() {
  
  return (
      <Cadastro title="Cadastro de Computadores">
        <Select name="memoria" text="Memória" />
        <Select name="hard_disk" text="Hard Disk"  />
        <Select name="processador" text="Processador"  />
        <Select name="office" text="Office" />   
      </Cadastro>
  );
}

export default Computadores;

