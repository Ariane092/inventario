import { Link } from "react-router-dom";
import "./SidebarMenu.css";
import { useState } from "react";

function SidebarMenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <Link
        className="sidebar-link"
        to={item.path}
        onClick={item.subNav && showSubnav}
      >
        <div>
          {item.icon}
          <label className="sidebar-label">{item.title}</label>
        </div>
        <div className="openClose-icon">
          {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
              ? item.iconClose
              : null}
        </div>
      </Link>
      {subnav && item.subNav.map((item, index) => {
        return (
          <Link to={item.path} end key={index} className="dropdown-link">
            {item.icon}
            <label className="sidebar-label">{item.title}</label>
          </Link>
        )
      })}
    </>
  );
}

export default SidebarMenu;
