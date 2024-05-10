import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function Marca({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const marca = data.marca;

  return (
    <Space.Compact>
      <Form.Item label="Marca" name="marca">
        <Select
          style={{ width: "150px" }}
          options={marca.map((option) => ({
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

export default Marca;
