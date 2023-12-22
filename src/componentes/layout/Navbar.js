import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  BsList,
  BsFileEarmarkText,
  BsPencilSquare,
  BsHouse,
  BsBoxArrowLeft,
} from "react-icons/bs";
import "./Navbar.css";
import logo from "../../img/cepea_logo.png";

const menuItem = document.querySelectorAll(".item_menu");

function selectLink() {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}

menuItem.forEach((item) => {
  item.addEventListener("click", selectLink);
});

function Navbar() {
  const [sideBar, setSideBar] = useState(true);
  const showSidebar = () => setSideBar(!sideBar);

  const [cadBox, setCadBox] = useState(false);
  const showCadBox = () => setCadBox(!cadBox);

  return (
    <>
      <div className="navbar">
        <Link className="btn_expand" to="/">
          <BsList onClick={showSidebar} />
        </Link>
        <Link to="/">
          <img src={logo} alt="cepea_logo" />
        </Link>
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
          <li onClick={showCadBox} className="item_menu">
            <Link to="/cadastro">
              <BsPencilSquare />
              <span>Cadastro</span>
            </Link>
          </li>

          <div className={cadBox ? "box_cad active" : "box_cad"}>
            <li>
            <Link to="/cadone">
              <span>Cad1</span>
            </Link>
          </li>
          <li>
            <Link to="/cadone">
              <span>Cad2</span>
            </Link>
          </li>
          <li>
            <Link to="/cadone">
              <span>Cad3</span>
            </Link>
          </li>
          </div>

          <li className="item_menu">
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
