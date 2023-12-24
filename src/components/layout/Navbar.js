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
  BsPlus,
} from "react-icons/bs";

const menuItem = document.querySelectorAll(".item_menu");

function selectLink() {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  })
  this.classList.add("active");
}

menuItem.forEach((item) => {
  item.addEventListener("click", selectLink);
});

function Navbar() {
  const [sideBar, setSideBar] = useState(true);
  const closeSidebar = () => setSideBar(!sideBar);

  return (
    <>
      <div className="navbar">
        <Link className="btn_expand">
          <BsList onClick={closeSidebar} />
        </Link>
        <Link to="/">
          <img src={logo} alt="cepea_logo" />
        </Link>
        <h4>Sistema de Inventário CEPEA/ESALQ-USP</h4>
      </div>
      <nav className={sideBar ? "nav_menu active" : "nav_menu"}>
        <ul>
          <li className="item_menu">
            <Link to="/">
              <BsHouse />
              <span>Home</span>
            </Link>
          </li>
          <li className="item_menu">
            <Link to="/relatorio">
              <BsFileEarmarkText />
              <span>Relatórios</span>
            </Link>
          </li>
          <li className="item_menu">
            <Link to="/cadastro">
              <BsPencilSquare />
              <span>Cadastro</span>
            </Link>
          </li>

          <div className="box_cad">
            <ul>
              <li>
                <Link to="/computadores">
                  <BsPlus />
                  <span>Computadores</span>
                </Link>
              </li>
              <li>
                <Link to="/impressoras">
                  <BsPlus />
                  <span>Impressoras</span>
                </Link>
              </li>
              <li>
                <Link to="/monitores">
                  <BsPlus />
                  <span>Monitores</span>
                </Link>
              </li>
              <li>
                <Link to="/escritorio">
                  <BsPlus />
                  <span>Escritório</span>
                </Link>
              </li>
            </ul>
          </div>

          <li className="item_menu">
            <Link to="/etiqueta">
              <BsQrCodeScan />
              <span>Gerar Etiqueta</span>
            </Link>
          </li>
          <li className="item_menu" id="logout">
            <Link to="/login">
              <BsBoxArrowLeft />
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
