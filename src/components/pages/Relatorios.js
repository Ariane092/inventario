import React, { useState } from "react";
import Select from "../forms/Select.js";
import { Button, Radio } from "antd";
import styles from "./Relatorios.module.css";
import axios from "axios";

function Relatorios() {
  const [size, setSize] = useState("default");
  const [formData, setFormData] = useState({
    responsavel: "",
    projeto: "",
    status: "",
    tipo_equipamento: "",
    marca: "",
    modelo: "",
    memoria: "",
    hard_disk: "",
    processador: "",
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

  const handleCreate = () => {

}

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleCreate}>
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
                Gerar
              </Button>
            </Radio.Group>
          </div>
        </form>
      </div>
    </>
  );
}

export default Relatorios;

