import { useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Select, Space, Form } from "antd";
import { FetchProvider, Context } from "../../pages/FetchProvider.js";

function Projeto({ isVisibleAdd = true }) {
  const { data } = useContext(Context);
  if(!data.projeto) return null; 
  const projetos = data.projeto;
  console.log(projetos);
  return (
    <div className="selects">
      <Space.Compact>
        <FetchProvider>
          <Form.Item label="Projeto">
            <Select
              style={{ width: "150px" }}
              options={projetos.map((option) => ({
                value: option.id,
                label: option.nome,
              }))}
            />
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


