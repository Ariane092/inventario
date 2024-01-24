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
          <BsList onClick={closeSidebar} />
        </Link>
        <Link to="/home">
          <img src={logo} alt="cepea_logo" />
        </Link>
        <h5>Sistema de Inventário CEPEA/ESALQ-USP</h5>
      </div>

      {/* sidebar
      <nav className={`${sidebarClose}`}>
        <ul>
          {SidebarData.map((item, index) => {
            return (
                <SidebarMenu item={item} key={index} />           
            );
          })}
        </ul>
      </nav> */}
    </>
  );
}

export default Navbar;
