import { Form, Input } from "antd";

function Observacao() {
  const { TextArea } = Input;
  return (
    <Form.Item label="Observação" name="observacao">
      <TextArea size="large" />
    </Form.Item>
  );
}

export default Observacao;
