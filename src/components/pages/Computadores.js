import React, { useState } from "react";
import "./Cadastro.css";
import {
  Button,
  Radio,
  Alert,
  Space,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
} from "antd";
import { MdLinkedCamera } from "react-icons/md";
import axios from "axios";
import Projeto from "../forms/Selects/Projeto.js";
import { FetchProvider, Context } from "../pages/FetchProvider.js";

function Computadores() {
  const [size, setSize] = useState("default");
  const { TextArea } = Input;
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
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          marginTop: "35px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Processo"
          name="processo"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Data Compra">
          <DatePicker format="DD-MM-YYYY" />
        </Form.Item>
        <Form.Item label="Responsável" name="responsavel">
          <Select />
        </Form.Item>
        <Form.Item
          label="Local"
          name="local"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Usuário"
          name="usuario"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input placeholder="Senão, digite ROTATIVO" />
        </Form.Item>
        <Form.Item
          label="NF"
          name="nota_fiscal"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Cód. Doação"
          name="cod_doacao"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Patrimônio"
          name="patrimonio"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <FetchProvider>
          <Projeto />
        </FetchProvider>
        <Form.Item label="Status" name="status">
          <Select />
        </Form.Item>
        <Form.Item
          label="Service Tag"
          name="servicetag"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Marca" name="marca">
          <Select />
        </Form.Item>
        <Form.Item label="Modelo" name="modelo">
          <Select />
        </Form.Item>
        <Form.Item label="Memória" name="memoria">
          <Select />
        </Form.Item>
        <Form.Item label="HD" name="hard_disk">
          <Select />
        </Form.Item>
        <Form.Item label="Processador" name="processador">
          <Select />
        </Form.Item>
        <Form.Item label="Office" name="office">
          <Select />
        </Form.Item>
        <Form.Item label="Tipo de Equipamento" name="tipo_computadores">
          <Select />
        </Form.Item>
        <Form.Item
          label="Configuração"
          name="configuracao"
          rules={[
            {
              required: true,
              message: "Please input!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Observação" name="observacao">
          <TextArea size="large" />
        </Form.Item>
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
