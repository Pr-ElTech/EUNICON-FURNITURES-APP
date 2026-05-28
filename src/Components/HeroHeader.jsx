import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/HeaderHero.css";
import { headerMiddle } from "../JS/Header";
import EuniconPrjLogo from "../Assets/EuniconPrjLogo.png";

import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const HeroHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  // HANDLE NAVIGATION + DROPDOWN
  const handleNavClick = (item) => {
    // IF ITEM HAS DROPDOWN
    if (item.categories && item.categories.length > 0) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      // NORMAL ROUTE
      navigate(`/${item.category.toLowerCase()}`);
      setOpenDropdown(null);
    }
  };

  // HANDLE SUB MENU CLICK
  const handleSubMenuClick = (sub) => {
    navigate(`/category/${sub.id}`);
    setOpenDropdown(null);
  };

  return (
    <div className="header">
      <section className="header-Wrapper">
        {/* LOGO */}
        <div className="header-left-logo" onClick={() => navigate("/")}>
          <img src={EuniconPrjLogo} alt="Logo" />
        </div>

        {/* NAVBAR */}
        <div className="header-center">
          {headerMiddle.map((item) => (
            <div className="nav-item" key={item.id}>
              {/* MAIN NAV */}
              <div
                className="nav-link-text"
                onClick={() => handleNavClick(item)}
              >
                {item.category}
              </div>

              {/* DROPDOWN */}
              {item.categories && openDropdown === item.id && (
                <div className="dropdown-menu">
                  {item.categories.map((sub) => (
                    <div
                      key={sub.id}
                      className="dropdown-item"
                      onClick={() => handleSubMenuClick(sub)}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="header-right">
          <div className="Profile-Bar" onClick={() => navigate("/profile")}>
            <CiUser className="Icon" />
            Peculiar
          </div>

          <CiSearch className="Icon" />

          <CiHeart className="Icon" onClick={() => navigate("/watchlist")} />

          <BsCart2 className="Icon" onClick={() => navigate("/addtocart")} />
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;
