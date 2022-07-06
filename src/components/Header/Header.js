import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.scss";
import logo from "../../assets/Logo/YGOMarket-logo.png";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function Header({
  cartItems,
  menu,
  showCart,
  handleClickMenu,
  handleCartClick,
}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    let token = sessionStorage.getItem("authToken");
    if (!!token) {
      axios
        .get(`${API_URL}/current`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setIsLoggedIn(true);
          setUserInfo(res.data);
        });
    }
  }, []);

  return (
    <div className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="ygomarket logo" />
        </Link>
        <div
          className="header__icon header__cart-icon"
          onClick={handleCartClick}
        >
          <i
            className={showCart ? "fas fa-times" : "fas fa-shopping-cart"}
            alt="shopping cart icon"
          ></i>
          <p className={showCart ? "header__blank" : "header__cart-counter"}>
            {cartItems.length}
          </p>
        </div>

        <div
          className="header__icon header__menu-icon"
          onClick={handleClickMenu}
        >
          <i
            className={menu ? "fas fa-times" : "fas fa-bars"}
            alt="menu icon"
          ></i>
        </div>
        <div
          className={
            menu
              ? "header__nav-menu header__nav-menu--active"
              : "header__nav-menu"
          }
        >
          {isLoggedIn ? (
            <p className="header__nav-link header__nav-link--welcome">
              Welcome {userInfo.username}
            </p>
          ) : (
            <Link
              to="/signin"
              className="header__nav-link"
              onClick={handleClickMenu}
            >
              Sign in
            </Link>
          )}
          {NavLinks.map((item, index) => {
            return (
              <Link
                to={item.url}
                className={item.className}
                key={index}
                onClick={handleClickMenu}
              >
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
