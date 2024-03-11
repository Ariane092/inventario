import React, { useState } from "react";
import Select from "../forms/Select.js";
import Input from "../forms/Input.js";
import { Button, Radio } from "antd";
import styles from "./Relatorios.module.css";
import { BsFiletypePdf, BsFiletypeCsv } from "react-icons/bs";
import axios from "axios";

function Relatorios() {
  const [size, setSize] = useState("default");
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

  const showComptSelect = (option) => {
    return option === "Desktop" || option === "Notebook";
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
        configuracao: "",
        observacao: "",
      });
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4>Relatórios</h4>
          <div className={styles.input_group}>
            <Select
              name="tipo_equipamento"
              text="Tipo de Equipamento"
              apiUrl="http://localhost:3001/equipamento"
              value={formData.tipo_equipamento}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="responsavel"
              text="Responsável"
              apiUrl="http://localhost:3001/responsavel"
              value={formData.responsavel}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="projeto"
              text="Projeto"
              apiUrl="http://localhost:3001/projeto"
              value={formData.projeto}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="status"
              text="Status"
              apiUrl="http://localhost:3001/status"
              value={formData.status}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="marca"
              text="Marca"
              apiUrl="http://localhost:3001/marca"
              value={formData.marca}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="modelo"
              text="Modelo"
              apiUrl="http://localhost:3001/modelo"
              value={formData.modelo}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            {showComptSelect(formData.tipo_equipamento) && (
            <div className={styles.select_compt}>
            <Select
              name="memoria"
              text="Memória"
              apiUrl="http://localhost:3001/memoria"
              value={formData.memoria}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="hard_disk"
              text="Hard Disk"
              apiUrl="http://localhost:3001/hd"
              value={formData.hard_disk}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            <Select
              name="processador"
              text="Processador"
              apiUrl="http://localhost:3001/processador"
              value={formData.processador}
              onChange={handleOnChange}
              isVisibleAdd={false}
            />
            </div>
)}
            <div className={styles.input_rel}>
            <BsFiletypePdf className={styles.icons} />{" "}
            <Input type="radio" text="PDF" />
            <BsFiletypeCsv className={styles.icons} />{" "}
            <Input type="radio" text="Excel" />
          </div>
          </div>

          <div className={styles.form_btn}>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Button
                type="primary"
                shape="round"
                size={size}
                style={{ background: "rgb(55, 119, 87)" }}
                htmlType="submit"
              >
                Gerar Relatório
              </Button>
            </Radio.Group>
          </div>
        </form>
      </div>
    </>
  );
}

export default Relatorios;

