import { Form, Input } from "antd";

function Observacao() {
  const { TextArea } = Input;
  return (
    <Form.Item label="Observação" name="observacao">
      <TextArea style={{width: "300px"}} />
    </Form.Item>
  );
}

export default Observacao;
