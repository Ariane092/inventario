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
      <InputNumber />
    </Form.Item>
  );
}

export default CodDoacao;
