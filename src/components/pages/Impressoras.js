import React, { useState } from "react";
import Input from "../forms/Input.js";
import Select from "../forms/Select.js";
import styles from "./Cadastro.module.css";
import { Button, Radio, App } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";

function Impressoras() {
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
    } catch (error) {
      console.error("Error:", error);
      alert("Erro ao cadastrar usuário.");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h4>Cadastro de Impressoras</h4>
          <div className={styles.input_group}>
            <Input
              type="text"
              text="Processo"
              name="processo"
              value={formData.processo}
              onChange={handleOnChange}
            />
            <Input
              type="date"
              text="Data Compra"
              name="data_compra"
              value={formData.data_compra}
              onChange={handleOnChange}
            />
            <Select
              name="responsavel"
              text="Responsável"
              apiUrl="http://localhost:3001/responsavel"
              value={formData.responsavel}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              text="Local"
              name="local"
              value={formData.local}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              text="Usuário"
              name="usuario"
              placeholder="Senão, digite ROTATIVO"
              value={formData.usuario}
              onChange={handleOnChange}
            />
            <Input
              type="number"
              text="NF"
              name="nota_fiscal"
              value={formData.nota_fiscal}
              onChange={handleOnChange}
            />
            <Input
              type="number"
              text="Cód. Doação"
              name="cod_doacao"
              value={formData.cod_doacao}
              onChange={handleOnChange}
            />
            <Input
              type="number"
              text="Patrimônio"
              name="patrimonio"
              value={formData.patrimonio}
              onChange={handleOnChange}
            />
            <Select
              name="projeto"
              text="Projeto"
              apiUrl="http://localhost:3001/projeto"
              value={formData.projeto}
              onChange={handleOnChange}
            />
            <Select
              name="status"
              text="Status"
              apiUrl="http://localhost:3001/status"
              value={formData.status}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              text="Service Tag"
              name="servicetag"
              value={formData.servicetag}
              onChange={handleOnChange}
            />
            <Select
              name="marca"
              text="Marca"
              apiUrl="http://localhost:3001/marca"
              value={formData.marca}
              onChange={handleOnChange}
            />
            <Select
              name="modelo"
              text="Modelo"
              apiUrl="http://localhost:3001/modelo"
              value={formData.modelo}
              onChange={handleOnChange}
            />
            <Select
              name="tipo_equipamento"
              text="Tipo de Equipamento"
              apiUrl="http://localhost:3001/impressoras"
              value={formData.tipo_impressoras}
              onChange={handleOnChange}
            />

            <div className={styles.obs_box}>
              <label>Observação:</label>
              <textarea
                name="observacao"
                value={formData.observacao}
                onChange={handleOnChange}
              ></textarea>
            </div>
          </div>
          <div className={styles.form_btn}>
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Button
                type="primary"
                shape="default"
                size={size}
                style={{ background: "rgb(55, 119, 87)" }}
                htmlType="submit"
              >
                Enviar
              </Button>
              <Button
                type="primary"
                size={size}
                shape="default"
                style={{ margin: 10, background: "rgb(55, 119, 87)"}}
                icon={<MdLinkedCamera />}
              >
              </Button>
            </Radio.Group>
          </div>
        </form>
      </div>
    </>
  );
}

export default Impressoras;
