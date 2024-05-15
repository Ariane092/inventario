import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import "./Cadastro.css";
import { Button, Alert, Space, Form } from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";
import moment from "moment";

function Editar() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [initialValues, setInitialValues] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cadastro/${id}`);
        const data = response.data;
        // Converte a data_compra para um objeto moment
        data.data_compra = data.data_compra ? moment(data.data_compra) : null;
        setInitialValues(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [id]);

  const onFinish = async (values) => {
    try {
      await axios.put(`http://localhost:3001/cadastro/${id}`, values);
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
    <div>
      <Space
        direction="vertical"
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        {submitSuccess ? (
          <Alert
            message="O equipamento foi alterado."
            type="success"
            showIcon
          />
        ) : submitError ? (
          <Alert message="Erro ao editar equipamento." type="error" showIcon />
        ) : null}
      </Space>

      <h2>Editar Equipamento</h2>

      <FetchProvider>
        {initialValues && (
          <Form
            className="form-inputs"
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Processo />
            <DataCompra />
            <Responsavel isVisibleAdd = {false} />
            <Local />
            <Usuario />
            <NotaFiscal />
            <CodDoacao />
            <Patrimonio />
            <Projeto isVisibleAdd = {false} />
            <Status isVisibleAdd = {false} />
            <ServiceTag />
            <Marca isVisibleAdd = {false} />
            <Modelo isVisibleAdd = {false} />
            <Memoria isVisibleAdd = {false} />
            <HardDisk isVisibleAdd = {false} />
            <Processador isVisibleAdd = {false} />
            <Office isVisibleAdd = {false} />
            <TipoComputadores isVisibleAdd = {false} />
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
        )}
      </FetchProvider>
    </div>
  );
}

export default Editar;

