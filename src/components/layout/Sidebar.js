import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../img/cepea.png";
import {
  AppstoreOutlined,
  LaptopOutlined,
  HomeOutlined,
  FileTextOutlined,
  FormOutlined,
  DesktopOutlined,
  PrinterOutlined,
  QrcodeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar } from "antd";
import { PiOfficeChair } from "react-icons/pi";

const { Header, Sider, Content } = Layout;

function getItem(label, key, icon, children, type, path) {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />, null, "item", "/home"),
  getItem("Inventário", "2", <AppstoreOutlined />, null, "item", "/inventario"),
  getItem("Relatórios", "3", <FileTextOutlined />, null, "item", "/relatorios"),
  getItem(
    "Cadastro",
    "sub1",
    <FormOutlined />,
    [
      getItem(
        "Computadores",
        "4",
        <LaptopOutlined />,
        null,
        "item",
        "/computadores"
      ),
      getItem(
        "Impressoras",
        "5",
        <PrinterOutlined />,
        null,
        "item",
        "/impressoras"
      ),
      getItem(
        "Monitores",
        "6",
        <DesktopOutlined />,
        null,
        "item",
        "/monitores"
      ),
      getItem(
        "Escritório",
        "7",
        <PiOfficeChair />,
        null,
        "item",
        "/escritorio"
      ),
    ],
    "submenu",
    null
  ),
  getItem("Gerar Qr Code", "8", <QrcodeOutlined />, null, "item", "/etiquetas"),
  getItem("Sair", "9", <LogoutOutlined />, null, "item", "/login"),
];

function Sidebar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
      <Layout style={{height: '100vh'}}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="dark" style={{boxShadow: '0 0 7px rgba(0,0,0,0.3)'}}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          className="sidebar-menu"
        >
          {items.map((item) => {
            if (item.type === "item") {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            } else if (item.type === "submenu") {
              return (
                <Menu.SubMenu
                  key={item.key}
                  icon={item.icon}
                  title={item.label}
                >
                  {item.children.map((submenuItem) => (
                    <Menu.Item key={submenuItem.key} icon={submenuItem.icon}>
                      <Link to={submenuItem.path}>{submenuItem.label}</Link>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            } else if (item.type === "link") {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            }
            return null;
          })}
        </Menu>
      </Sider>

      <Layout style={{height: '100vh'}}>
        <Header
          style={{
            padding: 0,
            background: 'whitesmoke',
            boxShadow: '0 0 7px rgba(0,0,0,0.3)',
            display: 'flex',
            padding: '10px 5px 10px 5px',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '55px'
          }}
        >
          <Button
            type="text"
            shape="circle"
            icon={collapsed ? <MenuUnfoldOutlined style={{fontSize: "20px",}} /> : <MenuFoldOutlined style={{fontSize: "20px"}}/>}
            onClick={() => setCollapsed(!collapsed)}
          />
          <div>
            <Link to="/home">
              <img src={logo} alt="cepea.png" />
            </Link>
          </div>
          <h5>Inventário CEPEA/ESALQ-USP</h5>
        </Header>
        <Content
          style={{
            margin: "15px 20px 0px 20px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            boxShadow: '0 0 2px rgba(0,0,0,0.3)',
          }}
        >
          <div>
            {props.children} {/*pages props*/}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
export default Sidebar;
