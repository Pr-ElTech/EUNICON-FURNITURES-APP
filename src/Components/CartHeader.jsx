import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../Style/HeaderHero.css";
import { headerMiddle } from "../JS/Header";
import EuniconPrjLogo from "../Assets/EuniconPrjLogo.png";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

const HeroHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="header">
      <section className="header-Wrapper">
        <div className="header-left-logo">
          <img src={EuniconPrjLogo} alt="Eunicon Logo" />
        </div>

        {/* <div className="header-center">
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
                  {item.categories.map((sub) => (
                    <div
                      key={sub.id}
                      className="dropdown-item"
                      // Navigate to the unique id path on click
                      onClick={() => navigate(`/category/${sub.id}`)}
                    >
                      {sub.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div> */}

        <div className="header-right">
          <div className="Profile-Bar">
            <CiUser /> Peculiar
          </div>
          <CiSearch /> <CiHeart /> <BsCart2 />
        </div>
      </section>
    </div>
  );
};

export default HeroHeader;