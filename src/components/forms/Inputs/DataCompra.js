import { Form, DatePicker } from "antd";

function DataCompra() {
  return (
    <Form.Item label="Data Compra">
      <DatePicker format="DD-MM-YYYY" />
    </Form.Item>
  );
}

export default DataCompra;
