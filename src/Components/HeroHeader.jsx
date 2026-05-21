import React, { useState } from "react";
import "../Style/HeaderHero.css";
import { headerMiddle } from "../JS/Header";
import EuniconPrjLogo from "../Assets/EuniconPrjLogo.png";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const HeroHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="header">
      <section className="header-Wrapper">
        <div className="header-left-logo">
          <img src={EuniconPrjLogo} alt="Eunicon Logo" />
        </div>

        <div className="header-center">
          {headerMiddle.map((item) => (
            <div
              className="nav-item"
              key={item.id}
              onClick={() => setOpenDropdown(item.id)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <span>{item.category}</span>

              {item.categories && openDropdown === item.id && (
                <div className="dropdown-menu">
                  {item.categories.map((sub, i) => (
                    <div key={i} className="dropdown-item">
                      {sub}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="header-right">
          <div className="Profile-Bar">
            <FaUser /> Peculiar
          </div>
          <FaSearch /> <FaHeart /> <FaShoppingCart />
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;
