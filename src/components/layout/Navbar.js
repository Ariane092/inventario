import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/cepea_logo.png";
import "./Navbar.css";
import SidebarMenu from "./SidebarMenu";
import { BsList } from "react-icons/bs";
import { SidebarData } from "./SidebarData";

function Navbar() {
  //fechar sidebar
  const [sideBar, setSideBar] = useState(false);
  const closeSidebar = () => setSideBar(!sideBar);

  const sidebarClose = sideBar ? "sidebar close" : "sidebar";

  return (
    <>
      {/* navbar */}
      <div className="navbar">
        <Link className="btn_expand">
          <i>
            <BsList onClick={closeSidebar} />
          </i>
        </Link>
        <Link to="/">
          <img src={logo} alt="cepea_logo" />
        </Link>
        <h4>Sistema de Inventário CEPEA/ESALQ-USP</h4>
      </div>

      {/* sidebar */}
      <nav className={`${sidebarClose}`}>
        <ul>
          {SidebarData.map((item, index) => {
            return (
              <li className="sidebar-list">
                <SidebarMenu item={item} key={index}  /> 
              </li>         
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
