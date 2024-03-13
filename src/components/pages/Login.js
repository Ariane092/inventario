import logo from "../../img/cepea.png";
import "./Login.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

function Login() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="form-container">
      <div className="title">
        <img src={logo} alt="cepea.png" />
        <h5>Inventário CEPEA/ESALQ-USP</h5>
      </div>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Informe seu usuário.",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="usuário"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Informe sua senha.",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="senha"
          />
        </Form.Item>
  
        <Form.Item>
          <Button
            type="primary"
            size=""
            htmlType="submit"
            className="login-button"
          >
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
