import { Form, Input } from "antd";

function Configuracao() {
  return (
    <Form.Item
      label="Configuração"
      name="configuracao"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Input />
    </Form.Item>
  );
}

export default Configuracao;
