import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Sidebar.css";
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
} from '@ant-design/icons';
import { PiOfficeChair } from "react-icons/pi";
import { Button, Menu } from 'antd';

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
  getItem('Home', '1', <HomeOutlined />, null, 'item', '/home'),
  getItem('Inventário', '2', <AppstoreOutlined />, null, 'item', '/inventario'),
  getItem('Relatórios', '3', <FileTextOutlined />, null, 'item', '/relatorios'),
  getItem('Cadastro', 'sub1', <FormOutlined />, [
    getItem('Computadores', '4', <LaptopOutlined />, null, 'item', '/computadores'),
    getItem('Impressoras', '5', <PrinterOutlined />, null, 'item', '/impressoras'),
    getItem('Monitores', '6', <DesktopOutlined />, null, 'item', '/monitores'),
    getItem('Escritório', '7', <PiOfficeChair />, null, 'item', '/escritorio'),
  ], 'submenu', null),
  getItem('Gerar Qr Code', '8', <QrcodeOutlined />, null, 'item', '/etiquetas'),
  getItem('Sair', '9', <LogoutOutlined />, null, 'item', '/login'),
];

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="sidebar">
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        className="sidebar-menu"
      >
        {items.map((item) => {
          if (item.type === 'item') {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          } else if (item.type === 'submenu') {
            return (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map((submenuItem) => (
                  <Menu.Item key={submenuItem.key} icon={submenuItem.icon}>
                    <Link to={submenuItem.path}>{submenuItem.label}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            );
          } else if (item.type === 'link') {
            return (
              <Menu.Item key={item.key} icon={item.icon}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            );
          }
          return null;
        })}
      </Menu>
    </div>
  );
}

export default Sidebar;
