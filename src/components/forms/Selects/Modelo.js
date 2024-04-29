import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function Modelo({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const modelo = data.modelo;

  return (
    <Space.Compact style={{ marginLeft: "15px" }}>
      <Form.Item label="Modelo">
        <Select
          style={{ width: "150px" }}
          options={modelo.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>
      {isVisibleAdd && (
        <Button>
          <PlusOutlined className="add_button" />
        </Button>
      )}
    </Space.Compact>
  );
}

export default Modelo;
