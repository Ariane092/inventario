import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { FetchProvider, Context } from "../../pages/FetchProvider.js";

function Projeto({ isVisibleAdd = true }) {
  const data = useContext(Context);
  console.log(data.projeto);
  return (
    <div className="selects">
      <Space.Compact>
        <FetchProvider>
          <Form.Item label="Projeto" name="projeto">
            {/* <Select
              style={{ width: "150px" }}
              options={data.map((option) => ({
                value: option.id,
                label: option.nome,
              }))}
            /> */}
          </Form.Item>
        </FetchProvider>
        {isVisibleAdd && (
          <Button>
            <PlusOutlined className="add_button" />
          </Button>
        )}
      </Space.Compact>
    </div>
  );
}

export default Projeto;

{
  /* <Select
          ref={selectRef}
          name={name}
          onChange={onChange}
          value={value}
          style={{ width: "150px" }}
        >
          <option></option>
          {options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.nome}
            </option>
          ))}
        </Select> */
}

// const [size, setSize] = useState("default");
