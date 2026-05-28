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

  // HANDLE NAVIGATION + DROPDOWN FOR MAIN TABS
  const handleNavClick = (item) => {
    if (item.categories && item.categories.length > 0) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      navigate(`/${item.category.toLowerCase()}`);
      setOpenDropdown(null);
    }
  };

  // HANDLE SUB MENU CLICK
  const handleSubMenuClick = (item, sub) => {
    if (item.category === "Services") {
      // Direct mapping to your custom page routes from App.jsx
      if (sub.id === "custom-furniture") {
        navigate("/custom-furniture");
      } else if (sub.id === "hire-artisan") {
        navigate("/Service"); 
      } else if (sub.id === "interior-design") {
        navigate("/FurnitureService");
      }
    } else {
      // Normal products parameter route
      navigate(`/category/${sub.id}`);
    }
    setOpenDropdown(null);
  };

  return (
    <div className="header">
      <section className="header-Wrapper">
        {/* LOGO */}
        <div className="header-left-logo" onClick={() => navigate("/about")}>
          <img src={EuniconPrjLogo} alt="Logo" />
        </div>

        {/* NAVBAR */}
        <div className="header-center">
          {headerMiddle.map((item) => (
            <div className="nav-item" key={item.id}>
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
                      onClick={() => handleSubMenuClick(item, sub)}
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
          <div className="Profile-Bar" onClick={() => navigate("/Profile")}>
            <CiUser className="Icon" />
            Peculiar
          </div>

          <CiSearch className="Icon" />
          <CiHeart className="Icon" onClick={() => navigate("/WatchList")} />
          <BsCart2 className="Icon" onClick={() => navigate("/CartPage")} />
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;