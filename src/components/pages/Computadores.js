import React, { useState } from "react";
import Select from "../forms/Select.js";
import Cadastro from "./Cadastro.js";
import Input from "../forms/Input.js";
import axios from "axios";

function Computadores() {
  // const [formData, setFormData] = useState({
  //   memoria: "",
  //   hard_disk: "",
  //   processador: "",
  //   office: "",
  //   tipo_computadores: "",
  //   configuracao: "",
  // });

  const [formData, setFormData] = useState({
    processo: "",
    data_compra: "",
    responsavel: "",
    local: "",
    usuario: "",
    nota_fiscal: "",
    cod_doacao: "",
    patrimonio: "",
    projeto: "",
    status: "",
    servicetag: "",
    tipo_equipamento: "",
    marca: "",
    modelo: "",
    memoria: "",
    hard_disk: "",
    processador: "",
    office: "",
    tipo_computadores: "",
    configuracao: "",
    observacao: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/cadastro", formData);
      alert("Usuário cadastrado com sucesso!");
      setFormData({
        processo: "",
        data_compra: "",
        responsavel: "",
        local: "",
        usuario: "",
        nota_fiscal: "",
        cod_doacao: "",
        patrimonio: "",
        projeto: "",
        status: "",
        servicetag: "",
        tipo_equipamento: "",
        marca: "",
        modelo: "",
        memoria: "",
        hard_disk: "",
        processador: "",
        office: "",
        tipo_computadores: "",
        configuracao: "",
        observacao: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <Cadastro title="Cadastro de Computadores">
      <Select
        name="memoria"
        text="Memória"
        apiUrl="http://localhost:3001/memoria"
        value={formData.memoria}
        onChange={handleOnChange}
      />
      <Select
        name="hard_disk"
        text="Hard Disk"
        apiUrl="http://localhost:3001/hd"
        value={formData.hard_disk}
        onChange={handleOnChange}
      />
      <Select
        name="processador"
        text="Processador"
        apiUrl="http://localhost:3001/processador"
        value={formData.processador}
        onChange={handleOnChange}
      />
      <Select
        name="office"
        text="Office"
        apiUrl="http://localhost:3001/office"
        value={formData.office}
        onChange={handleOnChange}
      />
      <Select
        name="tipo_computadores"
        text="Tipo de Produto"
        apiUrl="http://localhost:3001/computadores"
        value={formData.tipo_computadores}
        onChange={handleOnChange}
      />
      <Input
        type="text"
        text="Configuração"
        name="configuracao"
        value={formData.configuracao}
        onChange={handleOnChange}
      />
    </Cadastro>
  );
}

export default Computadores;
