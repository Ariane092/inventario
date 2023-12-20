import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import * as AiIcons from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";
import './Navbar.css';
// import logo from "../../img/cepea_logo.png";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="/" className="menubar">
          <FaIcons.FaBars onclick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "navmenu active" : "navmenu"}>
        <ul className="navmenu_itens">
          <li className="navbar_toggle">
            <Link to="/" className="menubars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li>
            <Link to="/"><AiOutlineHome /> Home</Link>
          </li>
          <li>
            <Link to="/relatorio"><IoNewspaperOutline /> Relatórios</Link>
          </li>
          <li>
            <Link to="/cadastro"><FaRegPenToSquare /> Cadastro</Link>
          </li>
          <li>
            <Link to="/login"><IoLogOutOutline /> Sair</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
