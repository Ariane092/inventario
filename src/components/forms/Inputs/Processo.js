import { Form, Input } from "antd";

function Processo() {
  return (
    <Form.Item
      label="Processo"
      name="processo"
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

export default Processo;

