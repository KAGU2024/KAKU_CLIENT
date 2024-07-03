import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/components/layout/Footer.scss";

const menus = [
  {
    name: "HOME",
    url: "/",
  },
  {
    name: "SHOP",
    url: "/shop",
  },
  {
    name: "DEAL",
    url: "/deal",
  },
  {
    name: "CHAT",
    url: "/chat",
  },
  {
    name: "MY PAGE",
    url: "/my",
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(location.pathname);

  useEffect(() => {
    setActiveMenu(location.pathname);
  }, [location]);

  return (
    <div className="Footer--Wrapper">
      {menus.map((menu) => (
        <div
          key={menu.name}
          className={`Footer--Menu ${activeMenu === menu.url ? "active" : ""}`}
          onClick={() => {
            setActiveMenu(menu.url);
            navigate(menu.url);
          }}
        >
          {activeMenu === menu.url && <div className="Footer--Menu--Circle"></div>}
          {menu.name}
        </div>
      ))}
    </div>
  );
};

export default Footer;
