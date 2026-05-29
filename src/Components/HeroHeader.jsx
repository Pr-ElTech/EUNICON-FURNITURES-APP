import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Store/userSlice";
import "../Style/HeaderHero.css";
import { headerMiddle } from "../JS/Header";
import EuniconPrjLogo from "../Assets/EuniconPrjLogo.png";

import { CiHeart, CiSearch, CiUser, CiLogout } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const HeroHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetail, token } = useSelector((state) => state.user);
  const isAuthenticated = !!token || !!localStorage.getItem("authToken");

  const displayName = userDetail?.firstName || "Peculiar";

  const handleNavClick = (item) => {
    if (item.categories && item.categories.length > 0) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      navigate(`/${item.category.toLowerCase()}`);
      setOpenDropdown(null);
    }
  };

  const handleSubMenuClick = (item, sub) => {
    if (item.category === "Services") {
      if (sub.id === "custom-furniture") navigate("/custom-furniture");
      else if (sub.id === "hire-artisan") navigate("/service");
      else if (sub.id === "interior-design") navigate("/furniture-service");
    } else {
      let backendCollectionKey = sub.id;
      if (sub.id === "sofas") backendCollectionKey = "sofa";
      if (sub.id === "chairs") backendCollectionKey = "chair";
      if (sub.id === "tables") backendCollectionKey = "table";
      if (sub.id === "beds") backendCollectionKey = "bed";
      if (sub.id === "rugs") backendCollectionKey = "rug";

      navigate(`/category/${backendCollectionKey}`);
    }
    setOpenDropdown(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="header">
      <section className="header-Wrapper">
        <div className="header-left-logo" onClick={() => navigate("/about")}>
          <img src={EuniconPrjLogo} alt="Logo" />
        </div>

        <div className="header-center">
          {headerMiddle.map((item) => (
            <div className="nav-item" key={item.id}>
              <div
                className="nav-link-text"
                onClick={() => handleNavClick(item)}
              >
                {item.category}
              </div>

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

        <div className="header-right">
          {isAuthenticated ? (
            <>
              <div className="Profile-Bar" onClick={() => navigate("/profile")}>
                <CiUser className="Icon" />
                <span>{displayName}</span>
              </div>
              <CiSearch className="Icon" />
              <CiHeart
                className="Icon"
                onClick={() => navigate("/watchlist")}
              />
              <BsCart2 className="Icon" onClick={() => navigate("/cart")} />
              <CiLogout
                className="Icon logout-btn"
                onClick={handleLogout}
                title="Log Out"
              />
            </>
          ) : (
            <button
              style={{
                padding: "20px 35px",
                backgroundColor: "#7499ff",
                borderRadius: "5px",
                border: "none",
                cursor: "pointer",
              }}
              className="header-login-link"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;
