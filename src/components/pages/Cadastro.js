import React, { useState } from "react";
import Input from "../forms/Input";
import Select from "../forms/Select";
import styles from "./Cadastro.module.css";
import { Button, Radio } from "antd";
import { FaCameraRetro } from "react-icons/fa";

function Cadastro(props) {
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
    service_tag: "",
    observacao: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Erro ao cadastrar");
      }

      console.log("Cadastro realizado com sucesso!");
      // Lógica adicional após o cadastro, como redirecionar o usuário
    } catch (error) {
      console.error("Erro ao cadastrar:", error.message);
    }
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form}>
          <h4>{props.title}</h4>
          <div className={styles.input_group}>
            <Input
              type="text"
              text="Processo"
              name="processo"
              value={formData.processo}
              handleOnChange={handleOnChange}
            />
            <Input
              type="date"
              text="Data Compra"
              name="data_compra"
              value={formData.data_compra}
              handleOnChange={handleOnChange}
            />
            <Select
              name="responsavel"
              text="Responsável"
              apiUrl="http://localhost:3001/api/responsavel"
              value={formData.responsavel}
              handleOnChange={handleOnChange}
            />
            <Input
              type="text"
              text="Local"
              name="local"
              value={formData.local}
              handleOnChange={handleOnChange}
            />
            <Input
              type="text"
              text="Usuário"
              name="usuario"
              placeholder="Caso não possua, digite ROTATIVO"
              value={formData.usuario}
              handleOnChange={handleOnChange}
            />
            <Input
              type="number"
              text="NF"
              name="nota_fiscal"
              value={formData.nota_fiscal}
              handleOnChange={handleOnChange}
            />
            <Input
              type="number"
              text="Cód. Doação"
              name="cod_doacao"
              value={formData.cod_doacao}
              handleOnChange={handleOnChange}
            />
            <Input
              type="number"
              text="Patrimônio"
              name="patrimonio"
              value={formData.patrimonio}
              handleOnChange={handleOnChange}
            />
            <Select
              name="projeto"
              text="Projeto"
              apiUrl="http://localhost:3001/api/projeto"
              value={formData.projeto}
              handleOnChange={handleOnChange}
            />
            <Select
              name="status"
              text="Status"
              apiUrl="http://localhost:3001/api/status"
              value={formData.status}
              handleOnChange={handleOnChange}
            />
            <Input
              type="text"
              text="Service Tag"
              name="service_tag"
              value={formData.service_tag}
              handleOnChange={handleOnChange}
            />
            {props.children} {/*computadores props*/}
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
                size={size}
                style={{ background: "rgb(55, 119, 87)" }}
                onClick={handleSubmit}
              >
                Enviar
              </Button>
              <Button
                type="primary"
                size={size}
                style={{ margin: 10, background: "rgb(55, 119, 87)" }}
                icon={<FaCameraRetro />}
              >
                Foto
              </Button>
            </Radio.Group>
          </div>
        </form>
      </div>
    </>
  );
}

export default Cadastro;
