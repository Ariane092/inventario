import React, { useState } from "react";
import { FetchProvider, Context } from "../pages/FetchProvider.js";
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
import "./Cadastro.css";
import { Button, Alert, Space, Form, Spin } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";

function Computadores() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:3001/cadastro", values);
      setSubmitSuccess(true);
      setSubmitError(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
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
    <FetchProvider>
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

        <Context.Consumer>
          {({ loading }) => (
            loading ? (
              <div style={{ textAlign: "center", margin: "20px 0" }}>
                <Spin size="medium" />
              </div>
            ) : (
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
                <Memoria />
                <HardDisk />
                <Processador />
                <Office />
                <TipoComputadores />
                <Configuracao />
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
            )
          )}
        </Context.Consumer>
      </div>
    </FetchProvider>
  );
}

export default Computadores;
