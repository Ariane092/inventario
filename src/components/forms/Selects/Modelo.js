import { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form, Popover, Input } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./Selects.css";
import axios from "axios";

function Modelo({ isVisibleAdd = true }) {
  const { data, setData } = useContext(Context);
  const modelo = data.modelo;
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3001/modelo", { nome: values.modelo });
      const newModelo = response.data; 
      setData(prevData => ({
        ...prevData,
        modelo: [...prevData.modelo, newModelo] 
      }));
      hide();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const content = (
    <div>
      <Form
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="modelo">
          <Input />
        </Form.Item>
        <div className="add-option">
          <a onClick={hide}>fechar</a>
          <div>
            <Button
              type="primary"
              size={"small"}
              style={{ background: "rgb(55, 119, 87)", marginLeft: "10px" }}
              htmlType="submit"
            >
              ok
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );

  return isVisibleAdd ? (
    <Space.Compact>
      <Form.Item label="Modelo" name="modelo">
        <Select
          style={{ width: 150 }}
          options={modelo.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>
      <div>
        <Popover
          content={content}
          title="Adicionar novo Modelo:"
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <Button className="add-button">
            <PlusOutlined />
          </Button>
        </Popover>
      </div>
    </Space.Compact>
  ) : (
    <Form.Item label="Modelo" name="modelo">
      <Select
        style={{ width: 150 }}
        options={modelo.map((option) => ({
          value: option.id,
          label: option.nome,
        }))}
      />
    </Form.Item>
  );
}

export default Modelo;
