import { Form, Input } from "antd";

function Usuario() {
  return (
    <Form.Item
      label="Usuário"
      name="usuario"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Input placeholder="Senão, digite ROTATIVO" />
    </Form.Item>
  );
}

export default Usuario;
