import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function Memoria({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const memoria = data.memoria;

  return (
    <Space.Compact>
      <Form.Item label="Memória">
        <Select
          style={{ width: "150px" }}
          options={memoria.map((option) => ({
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

export default Memoria;
