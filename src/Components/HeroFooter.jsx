import React from "react";
import "../Style/Footer.css";
import fileLogo from "../assets/EuniconPrjLogo.png";
import { footerElement } from "../JS/Footer"; // Ensure path is correct
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
      <section className="footer-wrapper">
        <article className="footer-top">
          <div className="footer-left">
            <img src={fileLogo} alt="EUNICON" className="footer-logo" />
            <div className="Link-icons-ctn">
              <FaYoutube /> <FaPinterest /> <FaTwitter /> <FaFacebook />{" "}
              <FaInstagram />
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
              <input type="text" placeholder="Name" />
              <BlogBtn className="subscribe-btn" text="Subscribe" />
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default HeroFooter;
