import React, { useState } from "react";
import "./Cadastro.css";
import {
  Button,
  Radio,
  Alert,
  Space,
  Form,
} from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";
import { FetchProvider } from "../pages/FetchProvider.js";
import Projeto from "../forms/Selects/Projeto.js";
import Responsavel from "../forms/Selects/Responsavel.js";
import Marca from "../forms/Selects/Marca.js";
import Modelo from "../forms/Selects/Modelo.js";
import Status from "../forms/Selects/Status.js";
import Memoria from "../forms/Selects/Memoria.js";
import HardDisk from "../forms/Selects/HardDisk.js";
import Processador from "../forms/Selects/Processador.js";
import Office from "../forms/Selects/Office.js";
import TipoComputadores from "../forms/Selects/TipoComputadores.js";
import Processo from "../forms/Inputs/Processo.js";
import DataCompra from "../forms/Inputs/DataCompra.js";
import Local from "../forms/Inputs/Local.js";
import Usuario from "../forms/Inputs/Usuario.js";
import NotaFiscal from "../forms/Inputs/NotaFiscal.js";
import CodDoacao from "../forms/Inputs/CodDoacao.js";
import Patrimonio from "../forms/Inputs/Patrimonio.js";
import ServiceTag from "../forms/Inputs/ServiceTag.js";
import Configuracao from "../forms/Inputs/Configuracao.js";
import Observacao from "../forms/Inputs/Observacao.js";

function Computadores() {
  const [size, setSize] = useState("default");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:3001/cadastro", formData);
  //     setSubmitSuccess(true);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1500);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setSubmitError(true);
  //   }
  // };

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {submitSuccess ? (
          <Alert message="Equipamento cadastrado!" type="success" showIcon />
        ) : submitError ? (
          <Alert
            message="Erro ao cadastrar equipamento."
            type="error"
            showIcon
          />
        ) : null}
      </Space>
      
      <h2>Cadastro de Computadores</h2>

      <Form
        name="basic"
        className="form-inputs"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <FetchProvider>
          <Processo />
          <DataCompra />
          <Responsavel />
          <Local />
          <Usuario />
          <NotaFiscal />
          <CodDoacao />
          <Patrimonio />
          <Projeto />
          <Status />
          <ServiceTag />
          <Marca />
          <Modelo />
          <Memoria />
          <HardDisk />
          <Processador />
          <Office />
          <TipoComputadores />
          <Configuracao />
          <Observacao />
        </FetchProvider>
      </Form>

      <div className="form-btn">
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
            style={{ margin: 10, background: "rgb(55, 119, 87)" }}
            icon={<MdLinkedCamera />}
          ></Button>
        </Radio.Group>
      </div>
    </div>
  );
}

export default Computadores;
