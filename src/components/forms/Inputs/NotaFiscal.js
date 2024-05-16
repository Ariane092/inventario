import { Form, InputNumber } from "antd";

function NotaFiscal() {
  return (
    <Form.Item
      label="NF"
      name="nota_fiscal"
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

export default NotaFiscal;
