import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function Office({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const office = data.office;

  return (
    <Space.Compact>
      <Form.Item label="Office" name="office">
        <Select
          style={{ width: "150px" }}
          options={office.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>
      {isVisibleAdd && (
        <Button>
          <PlusOutlined className="add_button" />
        </Button>
      )}
    </Space.Compact>
  );
}

export default Office;
