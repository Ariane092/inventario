import { Form, InputNumber } from "antd";

function Patrimonio() {
  return (
    <Form.Item
      label="Patrimônio"
      name="patrimonio"
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

export default Patrimonio;
