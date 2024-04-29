import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function HardDisk({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const hd = data.hard_disk;

  return (
    <Space.Compact style={{ marginLeft: "15px" }}>
      <Form.Item label="HD">
        <Select
          style={{ width: "150px" }}
          options={hd.map((option) => ({
            value: option.id,
            label: option.nome,
          }))}
        />
      </Form.Item>
      <div>
        {isVisibleAdd && (
          <Button className="add_button">
            <PlusOutlined />
          </Button>
        )}
      </div>
    </Space.Compact>
  );
}

export default HardDisk;
