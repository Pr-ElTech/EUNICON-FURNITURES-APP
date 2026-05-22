import React from "react";
import "../Style/FooterColumn.css";

export const FooterColumn = ({ title, links }) => (
  <div className="footer-col">
    <h3>{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>{link}</li>
      ))}
    </ul>
  </div>
);
