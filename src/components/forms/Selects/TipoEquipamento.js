import { useContext } from "react";
import { Select, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./Selects.css";

function TipoEquipamento() {
  const { data } = useContext(Context);
  const equipamento = data.tipo_equipamento;

  return (
      <Form.Item label="Tipo" name="tipo_equipamento">
        <Select
          style={{ width: 150 }}
          options={equipamento.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>  
  );
}

export default TipoEquipamento;
