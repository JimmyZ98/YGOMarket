import React from "react";
import logo from "../../assets/Logo/YGOMarket-logo.png";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  return (
    <div className={darkMode ? "footer darkmode" : "footer"}>
      <p className="footer__text">
        © 2022 — Designed and Developed by Jimmy Zhen
      </p>
      <Link to="/" className="footer__logo-link">
        <img className="footer__logo" src={logo} alt="ygomarket logo" />
      </Link>
    </div>
  );
}

export default Footer;
