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

  //mostrar ícone pequeno ao fechar a sidebar
  const sidebarIcon = sideBar ? "sidebar_icon active" : "sidebar_icon";
  //mostrar título embaixo no ícone ao fechar a sidebar
  const sidebarTitle = sideBar ? "sidebar_link-floating active" : "sidebar_link-floating";

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
                  <BsHouse className={`${sidebarIcon}`}/>
                <span>Home</span>
                <span className={`${sidebarTitle}`}>Home</span>
              </Link>
              <Link className="sidebar_link" to="/relatorio">
                <BsFileEarmarkText className={`${sidebarIcon}`} />
                <span>Relatórios</span>
                <span className={`${sidebarTitle}`}>Relatórios</span>
              </Link>
              <Link className="sidebar_link" to="/cadastro">
                <BsPencilSquare className={`${sidebarIcon}`} />
                <span>Cadastro</span>
                <span className={`${sidebarTitle}`}>Cadastro</span>
              </Link>

              {/* cadlist */}
              <div className="sidebar_list">
                <Link className="sidebar_link box_cad" to="/computadores">
                  <BsLaptop />
                  <span>Computadores</span>
                </Link>
                <Link className="sidebar_link box_cad" to="/impressoras">
                  <BsPrinter />
                  <span>Impressoras</span>
                </Link>
                <Link className="sidebar_link box_cad" to="/monitores">
                  <BsDisplay />
                  <span>Monitores</span>
                </Link>
                <Link className="sidebar_link box_cad" to="/escritorio">
                  <PiOfficeChair />
                  <span>Escritório</span>
                </Link>
              </div>
              {/* cadlist */}

              <Link className="sidebar_link" to="/etiquetas">
                <BsQrCodeScan className={`${sidebarIcon}`} />
                <span>Gerar Qr Code</span>
                <span className={`${sidebarTitle}`}>Qr Code</span>
              </Link>
              <Link className="sidebar_link" to="/login">
                <BsBoxArrowLeft className={`${sidebarIcon}`} />
                <span>Sair</span>
                <span className={`${sidebarTitle}`}>Sair</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
