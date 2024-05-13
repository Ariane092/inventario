import React, { useState } from "react";
import { FetchProvider } from "../pages/FetchProvider.js";
import Projeto from "../forms/Selects/Projeto.js";
import Responsavel from "../forms/Selects/Responsavel.js";
import Marca from "../forms/Selects/Marca.js";
import Modelo from "../forms/Selects/Modelo.js";
import Status from "../forms/Selects/Status.js";
import Office from "../forms/Selects/Office.js";
import Processo from "../forms/Inputs/Processo.js";
import DataCompra from "../forms/Inputs/DataCompra.js";
import Local from "../forms/Inputs/Local.js";
import Usuario from "../forms/Inputs/Usuario.js";
import NotaFiscal from "../forms/Inputs/NotaFiscal.js";
import CodDoacao from "../forms/Inputs/CodDoacao.js";
import Patrimonio from "../forms/Inputs/Patrimonio.js";
import ServiceTag from "../forms/Inputs/ServiceTag.js";
import Observacao from "../forms/Inputs/Observacao.js";
import "./Cadastro.css";
import { Button, Alert, Space, Form } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";
import TipoMonitores from "../forms/Selects/TipoMonitores.js";

function Monitores() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:3001/cadastro", values);
      setSubmitSuccess(true);
      setSubmitError(false);
      window.location.reload();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setSubmitSuccess(false);
      setSubmitError(true);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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

      <h2>Cadastro de Monitores</h2>

      <FetchProvider>
        <Form
    
          className="form-inputs"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
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
          <Office />
          <TipoMonitores />
          <Observacao />

          <div>
            <Button
              type="primary"
              shape="default"
              style={{ background: "rgb(55, 119, 87)" }}
              htmlType="submit"
            >
              Enviar
            </Button>
            <Button
              type="primary"
              shape="default"
              style={{ margin: 10, background: "rgb(55, 119, 87)" }}
              icon={<MdLinkedCamera />}
            />
          </div>
        </Form>
      </FetchProvider>
    </div>
  );
}

export default Monitores;
