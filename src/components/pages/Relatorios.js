import React, { useState } from "react";
import { FetchProvider } from "../pages/FetchProvider.js";
import Projeto from "../forms/Selects/Projeto.js";
import Responsavel from "../forms/Selects/Responsavel.js";
import Marca from "../forms/Selects/Marca.js";
import Modelo from "../forms/Selects/Modelo.js";
import Status from "../forms/Selects/Status.js";
import Memoria from "../forms/Selects/Memoria.js";
import HardDisk from "../forms/Selects/HardDisk.js";
import Processador from "../forms/Selects/Processador.js";
import TipoEquipamento from "../forms/Selects/TipoEquipamento.js";
import Office from "../forms/Selects/Office.js";
import "./Cadastro.css";
import { Button, Alert, Space, Form } from "antd";
import axios from "axios";
import jsPDF from "jspdf";

function Relatorios() {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const generatePDF = (data) => {
    const doc = new jsPDF();
    doc.text("Relatório de Equipamentos", 10, 10);
    // Adicione o conteúdo do PDF usando o data
    let yPosition = 20;
    data.forEach((item) => {
      for (const key in item) {
        if (item[key]) {
          doc.text(`${key}: ${item[key]}`, 10, yPosition);
          yPosition += 10;
        }
      }
      yPosition += 10; // Adicione uma linha em branco entre registros
    });
    doc.save("relatorio_equipamentos.pdf");
  };

  const onFinish = async (values) => {
    // Filtra os valores para enviar apenas os selecionados
    const filteredValues = {};
    Object.keys(values).forEach(key => {
      if (values[key]) {
        filteredValues[key] = values[key];
      }
    });

    try {
      const response = await axios.get("http://localhost:3001/cadastro", {
        params: filteredValues
      });
      generatePDF(response.data);
      setSubmitSuccess(true);
      setSubmitError(false);
    } catch (error) {
      console.error("Erro ao gerar relatório:", error);
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
          <Alert message="Relatório gerado com sucesso." type="success" showIcon />
        ) : submitError ? (
          <Alert
            message="Erro ao gerar relatório."
            type="error"
            showIcon
          />
        ) : null}
      </Space>

      <h2>Relatórios de Equipamentos</h2>

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
          <TipoEquipamento />
          <Responsavel isVisibleAdd={false} />
          <Projeto isVisibleAdd={false} />
          <Status isVisibleAdd={false} />
          <Marca isVisibleAdd={false} />
          <Modelo isVisibleAdd={false} />
          <Memoria isVisibleAdd={false} />
          <HardDisk isVisibleAdd={false} />
          <Processador isVisibleAdd={false} />
          <Office isVisibleAdd={false} />
          <div>
            <Button
              type="primary"
              shape="default"
              style={{ background: "rgb(55, 119, 87)" }}
              htmlType="submit"
            >
              Gerar
            </Button>
          </div>
        </Form>
      </FetchProvider>
    </div>
  );
}

export default Relatorios;
