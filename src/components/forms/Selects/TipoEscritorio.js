import { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form, Popover, Input } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";
import axios from "axios";

function TipoEscritorio({ isVisibleAdd = true }) {
  const { data, setData } = useContext(Context);
  const escritorio = data.tipo_escritorio;
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:3001/escritorio", {
        nome: values.tipo_escritorio,
      });
      const newEscritorio = response.data;
      setData((prevData) => ({
        ...prevData,
        tipo_escritorio: [...prevData.tipo_escritorio, newEscritorio],
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
        <Form.Item name="tipo_escritorio">
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

  return (
    <Space.Compact>
      <Form.Item label="Tipo" name="tipo_equipamento">
        <Select
          style={{ width: 165 }}
          options={escritorio.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>
      <div>
        {isVisibleAdd && (
          <Popover
            content={content}
            title="Adicionar novo Item Escritório:"
            trigger="click"
            open={open}
            onOpenChange={handleOpenChange}
          >
            <Button className="add-button">
              <PlusOutlined />
            </Button>
          </Popover>
        )}
      </div>
    </Space.Compact>
  );
}

export default TipoEscritorio;
