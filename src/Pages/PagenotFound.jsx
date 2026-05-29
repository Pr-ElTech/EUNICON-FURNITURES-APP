import React from "react";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";
import "../Style/PagenotFound.css";

const PagenotFound = () => {
  return (
    <section className="notfound-viewport">
      <div className="notfound-card">
        <div className="notfound-header">
          <h1 className="notfound-code">404</h1>
        </div>

        <div className="notfound-body">
          <h4 className="notfound-title">Page Not Found</h4>
          <p className="notfound-text">
            The design piece or collection you are looking for has been moved,
            renamed, or no longer exists in our current catalogue.
          </p>
          <br />
          <Link to="/home" className="notfound-home-link">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PagenotFound;
