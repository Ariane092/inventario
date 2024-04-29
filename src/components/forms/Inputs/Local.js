import { Form, Input } from "antd";

function Local() {
  return (
    <Form.Item
      label="Local"
      name="local"
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

export default Local;
