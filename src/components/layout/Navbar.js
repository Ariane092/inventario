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
import { MdOutlineInventory } from "react-icons/md";

function Navbar() {
  //fechar sidebar
  const [sideBar, setSideBar] = useState(false);
  const closeSidebar = () => setSideBar(!sideBar);

  const sidebarClose = sideBar ? "sidebar close" : "sidebar";

  // //mostrar ícone menor ao fechar a sidebar
  // const sidebarIcon = sideBar ? "sidebar_icon active" : "sidebar_icon";

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
      <div className={`${sidebarClose}`}>
        <ul class="nav_list">
          <li>
            <Link to="/">
              <i>
                <BsHouse />
              </i>
              <span className="link_name">Home</span>
            </Link>

            <ul class="sub_menu blank">
                <Link class="link_name">Home</Link>
            </ul>
          </li>

          <li>
            <Link className="" to="/">
              <i>
                <MdOutlineInventory />
              </i>
              <span className="link_name">Inventário</span>
            </Link>

            <ul class="sub_menu blank">
                <Link class="link_name">Inventário</Link>
            </ul>
          </li>

          <li>
            <Link to="/relatorios">
              <i>
                <BsFileEarmarkText />
              </i>
              <span className="link_name">Relatórios</span>
            </Link>

            <ul class="sub_menu blank">
                <Link class="link_name">Relatórios</Link> 
            </ul>
          </li>

          <li>
            <div class="icon_link">
              <Link to="/cadastro">
                <i>
                  <BsPencilSquare />
                </i>
                <span className="link_name">Cadastro</span>
              </Link>
            </div>

            <ul class="sub_menu">
              <Link to="/cadastro" class="link_name">Cadastro</Link>

              <Link to="/computadores">Computadores</Link>

              <Link to="/monitores">Monitores</Link>

              <Link to="/impressoras">Impressoras</Link>

              <Link to="/escritorio">Escritório</Link>
            </ul>
          </li>

          <ul className="sub_cad">
            <Link to="/computadores">
              <i>
                <BsLaptop />
              </i>
              <span>Computadores</span>
            </Link>

            <Link to="/impressoras">
              <i>
                <BsPrinter />
              </i>
              <span>Impressoras</span>
            </Link>

            <Link to="/monitores">
              <i>
                <BsDisplay />
              </i>
              <span>Monitores</span>
            </Link>

            <Link to="/escritorio">
              <i>
                <PiOfficeChair />
              </i>
              <span>Escritório</span>
            </Link>
          </ul>

          <li>
            <Link to="/etiquetas">
              <i>
                <BsQrCodeScan />
              </i>
              <span className="link_name">Qr Code</span>
            </Link>

            <ul class="sub_menu blank">
                <Link class="link_name">Gerar Qr Code</Link>
            </ul>
          </li>

          <li>
            <Link to="/login">
              <i>
                <BsBoxArrowLeft />
              </i>
              <span className="link_name">Sair</span>
            </Link>

            <ul class="sub_menu blank">
                <Link class="link_name">Sair</Link>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
