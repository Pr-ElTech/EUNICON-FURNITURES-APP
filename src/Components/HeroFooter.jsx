import React from "react";
import "../Style/Footer.css";
import fileLogo from "../assets/EuniconPrjLogo.png";
import { footerElement } from "../JS/Footer";
import { FooterColumn } from "./FooterColumn";
import {
  FaYoutube,
  FaPinterest,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import BlogBtn from "./BlogBtn";

const HeroFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="footer-left">
            <img src={fileLogo} alt="EUNICON" className="footer-logo" />
            <div className="Link-icons-ctn">
              <FaYoutube className="footer-Icon" />
              <FaPinterest className="footer-Icon" />
              <FaTwitter className="footer-Icon" />
              <FaFacebook className="footer-Icon" />
              <FaInstagram className="footer-Icon" />
            </div>
          </div>

          <div className="footer-center">
            {footerElement.slice(0, 2).map((item) => (
              <FooterColumn
                key={item.id}
                title={item.title}
                links={item.content}
              />
            ))}
          </div>

          <div className="footer-right">
            <h3>News Letter</h3>
            <div className="newsletter-box">
              <input
                className="newsletter-input"
                type="text"
                placeholder="Name"
              />
              <BlogBtn className="subscribe-btn" text="Subscribe" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026, Eunicon interior Powered by Shopify</p>
        </div>
      </div>
    </footer>
  );
};

export default HeroFooter;
