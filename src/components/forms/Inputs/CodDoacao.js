import { Form, InputNumber } from "antd";

function CodDoacao() {
  return (
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
      <InputNumber style={{width: "165px"}} />
    </Form.Item>
  );
}

export default CodDoacao;
