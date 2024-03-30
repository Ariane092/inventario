import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../forms/InputCad.js";
import Select from "../forms/SelectCad.js";
import "./Cadastro.css";
import { Button, Radio, Alert, Space } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";

function Editar() {
  const [size, setSize] = useState("default");
  const [editSuccess, setEditSuccess] = useState(false);
  const [editError, setEditError] = useState(false);
  const { id } = useParams();
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/cadastro/${id}`);
        const data = await response.json();
        setFormData({
          ...data
        });
      } catch (error) {
        console.error("Erro ao obter dados da API", error);
      }
    };
    fetchData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/cadastro/${id}`, formData);
      setEditSuccess(true);
      setTimeout(() => {
        window.location.reload(); 
    }, 2000);
    } catch (error) {
      setEditError(true);
    }
  };

  return (
    <>
        <form onSubmit={handleEdit}>
          <Space
            direction="vertical"
            style={{
              width: '100%',
              marginTop: '10px',
              marginBottom: '10px'
            }}
          >
            {editSuccess ? (
              <Alert
                message="O equipamento foi atualizado."
                type="success"
                showIcon
              />
            ) : editError ? (
              <Alert
                message="Erro ao atualizar equipamento."
                type="error"
                showIcon
              />
            ) : null}
          </Space>
          <h4>Editar Equipamento</h4>
          <div className="input_group">
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
              name="tipo_equipamento"
              text="Tipo de Equipamento"
              apiUrl="http://localhost:3001/equipamento"
              value={formData.tipo_equipamento}
              onChange={handleOnChange}
            />
            <Input
              type="text"
              text="Configuração"
              name="configuracao"
              value={formData.configuracao}
              onChange={handleOnChange}
            />
            <Input
              type="textarea"
              text="Observação"
              name="observacao"
              value={formData.observacao}
              onChange={handleOnChange}
            />
          </div>
          <div className="form-btn">
            <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
              <Button
                type="primary"
                shape="default"
                size={size}
                style={{ background: "rgb(55, 119, 87)" }}
                htmlType="submit"
              >
                Alterar
              </Button>
              <Button
                type="primary"
                size={size}
                shape="default"
                style={{ margin: 10, background: "rgb(55, 119, 87)" }}
                icon={<MdLinkedCamera />}
              ></Button>
            </Radio.Group>
          </div>
        </form>
    </>
  );
}

export default Editar;
