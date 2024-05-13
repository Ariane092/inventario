import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function TipoImpressoras({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const impressoras = data.tipo_impressoras;

  return (
    <Space.Compact>
      <Form.Item label="Tipo" name="tipo_equipamento">
        <Select
          style={{ width: "150px" }}
          options={impressoras.map((option) => ({
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

export default TipoImpressoras;