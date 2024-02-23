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
import { Layout, Menu } from 'antd';
import { PiOfficeChair } from "react-icons/pi";

const { Sider, Content } = Layout;

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
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 768);
  //     };
  
  //     window.addEventListener("resize", handleResize);
  
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);
  
  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };
  
  //   useEffect(() => {
  //     if (isMobile) {
  //       setCollapsed(true);
  //     } else {
  //       setCollapsed(false);
  //     }
  //   }, [isMobile]);
    
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light" className="sider">

        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
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

        <nav className="navbar">
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}

          <div className="logo">
          <Link to="/home">
            <img src={logo} alt="cepea.png" />
          </Link>
        </div>

          <h5>Sistema de Inventário CEPEA/ESALQ-USP</h5>
        </nav>

        <Content className="content">
          <div>
            {props.children} {/*pages props*/}
          </div>
        </Content>

    
    </Layout >
  );
};
export default Sidebar;









































// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";
// import logo from "../../img/cepea_logo.png";
// import {
//   AppstoreOutlined,
//   LaptopOutlined,
//   HomeOutlined,
//   FileTextOutlined,
//   FormOutlined,
//   DesktopOutlined,
//   PrinterOutlined,
//   QrcodeOutlined,
//   LogoutOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
// } from "@ant-design/icons";
// import { PiOfficeChair } from "react-icons/pi";
// import { Menu } from "antd";

// function getItem(label, key, icon, children, type, path) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//     path,
//   };
// }

// const items = [
//   getItem("Home", "1", <HomeOutlined />, null, "item", "/home"),
//   getItem("Inventário", "2", <AppstoreOutlined />, null, "item", "/inventario"),
//   getItem("Relatórios", "3", <FileTextOutlined />, null, "item", "/relatorios"),
//   getItem(
//     "Cadastro",
//     "sub1",
//     <FormOutlined />,
//     [
//       getItem(
//         "Computadores",
//         "4",
//         <LaptopOutlined />,
//         null,
//         "item",
//         "/computadores"
//       ),
//       getItem(
//         "Impressoras",
//         "5",
//         <PrinterOutlined />,
//         null,
//         "item",
//         "/impressoras"
//       ),
//       getItem(
//         "Monitores",
//         "6",
//         <DesktopOutlined />,
//         null,
//         "item",
//         "/monitores"
//       ),
//       getItem(
//         "Escritório",
//         "7",
//         <PiOfficeChair />,
//         null,
//         "item",
//         "/escritorio"
//       ),
//     ],
//     "submenu",
//     null
//   ),
//   getItem("Gerar Qr Code", "8", <QrcodeOutlined />, null, "item", "/etiquetas"),
//   getItem("Sair", "9", <LogoutOutlined />, null, "item", "/login"),
// ];

// function Sidebar(props) {
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   useEffect(() => {
//     if (isMobile) {
//       setCollapsed(true);
//     } else {
//       setCollapsed(false);
//     }
//   }, [isMobile]);

//   return (
//     <>
//       <div className="navbar">
//         <div
//           onClick={toggleCollapsed}
//           style={{
//             cursor: "pointer",
//             marginLeft: 10,
//           }}
//         >
//           {collapsed ? (
//             <MenuUnfoldOutlined style={{ color: "white", fontSize: 18 }} />
//           ) : (
//             <MenuFoldOutlined style={{ color: "white", fontSize: 18 }} />
//           )}
//         </div>
//         <Link to="/home">
//           <img src={logo} alt="cepea_logo" />
//         </Link>
//         <h5>Sistema de Inventário CEPEA/ESALQ-USP</h5>
//       </div>
//       <div className="sidebar">
//         <Menu
//           defaultSelectedKeys={["1"]}
//           defaultOpenKeys={["sub1"]}
//           mode="inline"
//           theme="light"
//           inlineCollapsed={collapsed}
//           className="sidebar-menu"
//         >
//           {items.map((item) => {
//             if (item.type === "item") {
//               return (
//                 <Menu.Item key={item.key} icon={item.icon}>
//                   <Link to={item.path}>{item.label}</Link>
//                 </Menu.Item>
//               );
//             } else if (item.type === "submenu") {
//               return (
//                 <Menu.SubMenu
//                   key={item.key}
//                   icon={item.icon}
//                   title={item.label}
//                 >
//                   {item.children.map((submenuItem) => (
//                     <Menu.Item key={submenuItem.key} icon={submenuItem.icon}>
//                       <Link to={submenuItem.path}>{submenuItem.label}</Link>
//                     </Menu.Item>
//                   ))}
//                 </Menu.SubMenu>
//               );
//             } else if (item.type === "link") {
//               return (
//                 <Menu.Item key={item.key} icon={item.icon}>
//                   <Link to={item.path}>{item.label}</Link>
//                 </Menu.Item>
//               );
//             }
//             return null;
//           })}
//         </Menu>
//       </div>
//       <div>
//         {props.children} {/*pages props*/}
//       </div>
//     </>
//   );
// }

// export default Sidebar;
