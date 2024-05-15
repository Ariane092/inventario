import { useContext, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form, Popover, Input } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";
import axios from "axios";

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
