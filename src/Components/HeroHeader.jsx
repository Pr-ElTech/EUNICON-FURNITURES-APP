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

  // Smart routing controller
  const handleNavClick = (item) => {
    if (item.categories && item.categories.length > 0) {
      // If it has a sub-menu array, open/close the dropdown container
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else if (item.path) {
      // If it's a standalone structural route link, navigate right to it!
      navigate(item.path);
      setOpenDropdown(null);
    } else {
      // Fallback clean conversion string if path isn't explicitly defined in data
      navigate(`/${item.category.toLowerCase().trim()}`);
      setOpenDropdown(null);
    }
  };

  return (
    <div className="header">
      <section className="header-Wrapper">
        {/* Brand Logo - Clicking redirects right back to the central hub */}
        <div
          className="header-left-logo"
          onClick={() => navigate("/home")}
          style={{ cursor: "pointer" }}
        >
          <img src={EuniconPrjLogo} alt="Eunicon Logo" />
        </div>

        {/* Center Navbar Controls Selection Matrix */}
        <div className="header-center">
          {headerMiddle.map((item) => (
            <div
              className="nav-item"
              key={item.id}
              onClick={() => handleNavClick(item)}
              onMouseLeave={() => setOpenDropdown(null)}
              style={{ position: "relative" }}
            >
              <span className="nav-link-text">{item.category}</span>

              {/* Nested Dropdown Sub-menu Container Rendering */}
              {item.categories && openDropdown === item.id && (
                <div className="dropdown-menu">
                  {item.categories.map((sub) => (
                    <div
                      key={sub.id}
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation(); // Stops parent container click from firing twice
                        navigate(`/category/${sub.id}`);
                        setOpenDropdown(null);
                      }}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Corner: Utility Profile Triggers & Action Links */}
        <div className="header-right">
          <div
            className="Profile-Bar"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          >
            <CiUser className="Icon" /> Peculiar
          </div>
          <CiSearch className="Icon" />
          <CiHeart className="Icon" />
          <BsCart2
            className="Icon"
            onClick={() => navigate("/checkout")}
            style={{ cursor: "pointer" }}
          />
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;
