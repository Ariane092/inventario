import { Form, Input } from "antd";

function ServiceTag() {
  return (
    <Form.Item
      label="Service Tag"
      name="servicetag"
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

export default ServiceTag;
