import { React, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/cepea_logo.png";
import "./Navbar.css";
import {
  BsList,
  BsFileEarmarkText,
  BsPencilSquare,
  BsHouse,
  BsBoxArrowLeft,
  BsQrCodeScan,
  BsDisplay,
  BsLaptop,
  BsPrinter,
} from "react-icons/bs";
import { PiOfficeChair } from "react-icons/pi";

function Navbar() {
  //fechar sidebar
  const [sideBar, setSideBar] = useState(true);
  const closeSidebar = () => setSideBar(!sideBar);

  return (
    <>
      {/* navbar */}
      <div className="navbar" id="header-toggle">
        <Link className="btn_expand">
          <BsList onClick={closeSidebar} />
        </Link>
        <Link to="/">
          <img src={logo} alt="cepea_logo" />
        </Link>
        <h4>Sistema de Inventário CEPEA/ESALQ-USP</h4>
      </div>

      {/* sidebar */}
      <div className={sideBar ? "sidebar active" : "sidebar"}>
        <nav className="sidebar_container">
          <div className="sidebar_content">
            <div className="sidebar_list">
              <Link className="sidebar_link" to="/">
                <BsHouse className="sidebar_icon" />
                <span>Home</span>
              </Link>
              <Link className="sidebar_link" to="/relatorio">
                <BsFileEarmarkText className="sidebar_icon" />
                <span>Relatórios</span>
              </Link>
              <Link className="sidebar_link" to="/cadastro">
                <BsPencilSquare className="sidebar_icon" />
                <span>Cadastro</span>
              </Link>

              {/* cadlist */}
              <div className="sidebar_list">
                <Link className="sidebar_link" to="/computadores">
                  <BsLaptop className="sidebar_icon" />
                  <span>Computadores</span>
                </Link>
                <Link className="sidebar_link" to="/impressoras">
                  <BsPrinter className="sidebar_icon" />
                  <span>Impressoras</span>
                </Link>
                <Link className="sidebar_link" to="/monitores">
                  <BsDisplay className="sidebar_icon" />
                  <span>Monitores</span>
                </Link>
                <Link className="sidebar_link" to="/escritorio">
                  <PiOfficeChair className="sidebar_icon" />
                  <span>Escritório</span>
                </Link>
              </div>
              {/* cadlist */}

              <Link className="sidebar_link" to="/etiquetas">
                <BsQrCodeScan className="sidebar_icon" />
                <span>Gerar Qr Code</span>
              </Link>
              <Link className="sidebar_link" to="/login">
                <BsBoxArrowLeft className="sidebar_icon" />
                <span>Sair</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
