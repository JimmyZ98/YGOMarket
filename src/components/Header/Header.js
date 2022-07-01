import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/Logo/YGOMarket-logo.png";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

function Header() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="ygomarket logo" />
        </Link>
        <Link to="/checkout" className="header__icon header__cart-icon">
          <i className="fas fa-shopping-cart" alt="shopping cart icon"></i>
        </Link>

        <div className="header__icon header__menu-icon" onClick={handleClick}>
          <i
            className={menu ? "fas fa-times" : "fas fa-bars"}
            alt="menu icon"
          ></i>
          <div className="header__menu-icon"></div>
        </div>
        <div
          className={
            menu
              ? "header__nav-menu header__nav-menu--active"
              : "header__nav-menu"
          }
        >
          {NavLinks.map((item, index) => {
            return (
              <Link to={item.url} className={item.className} key={index}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
