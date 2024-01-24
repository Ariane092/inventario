import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  LinkOutlined,
  LaptopOutlined,
  HomeOutlined,
  FileTextOutlined,
  FormOutlined,
  DesktopOutlined,
  PrinterOutlined,
  QrcodeOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Home', '1', <HomeOutlined />),
  getItem('Inventário', '2', <AppstoreOutlined />),
  getItem('Relatórios', '3', <FileTextOutlined />),
  getItem('Cadastro', 'sub1', <FormOutlined />, [
    getItem('Computadores', '4', <LaptopOutlined />),
    getItem('Impressoras', '5', <PrinterOutlined />),
    getItem('Monitores', '6', <DesktopOutlined />),
    getItem('Escritório', '7', ),
  ]),
  getItem('Gerar Qr Code', '8', <QrcodeOutlined />),
  getItem('Sair', '9', <LogoutOutlined />),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />,
  ),
];

function Sidebar() {
  const [mode, setMode] = useState('inline');

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  
  
  return (
    <>
      <Switch style={{
        
          marginTop: 90,
          
        }}onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <br />
      <br />
      <Menu
        style={{
          width: 260,
          marginTop: 40,
          fontSize: 16,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        
        items={items}
      />
    </>
  );
};
export default Sidebar;