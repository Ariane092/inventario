import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { Context } from "../../pages/FetchProvider.js";
import "./SelectCad.css";

function HardDisk({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  const hd = data.hard_disk;

  return (
    <Space.Compact>
      <Form.Item label= "HD" name="hard_disk">
        <Select
          style={{ width: 150 }}
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

