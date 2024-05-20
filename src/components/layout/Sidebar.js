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
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Avatar, Space } from "antd";
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1000) {
        setCollapsed(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        style={{
          background: "rgb(55, 119, 87)",
          height: "100vh",
          position: "sticky",
          top: 0,
          left: 0
        }}
      >
        <Space direction="vertical" size={16}>
          <Space wrap size={16} className="user-style">
            <Avatar
            size={"large"}
              style={{
                backgroundColor: '#fde3cf',
                color: '#cb755d',
                fontSize: '15px'
              }}
            >
              AD
            </Avatar>
            {!collapsed ? <p>ariane.diniz</p> : null}
          </Space>
        </Space>
        <Menu
          theme="light"
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

      <Layout className="layout-ant">
        <Header
          style={{
            background: colorBgContainer,
            display: "flex",
            padding: "10px 5px 10px 5px",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "55px",
            position: "sticky",
            zIndex: '2',
            top: 0,
            left: 0
          }}
        >
          <Button
            type="text"
            shape="circle"
            icon={
              collapsed ? (
                <MenuUnfoldOutlined style={{ fontSize: "20px" }} />
              ) : (
                <MenuFoldOutlined style={{ fontSize: "20px" }} />
              )
            }
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
            margin: "15px 15px 0px 15px",
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
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
