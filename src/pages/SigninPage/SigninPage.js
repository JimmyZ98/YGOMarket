import React from "react";
import Cart from "../../components/Cart/Cart";
import "./SigninPage.scss";
import { Link } from "react-router-dom";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function SigninPage({ cartItems, handleRemove, showCart, handleCartClick }) {
  const handleSignIn = (e) => {
    e.preventDefault();

    console.log({
      username: e.target.username.value,
      password: e.target.password.value,
    });

    axios
      .post(`${API_URL}/login`, {
        username: e.target.username.value,
        password: e.target.password.value,
      })
      .then((res) => {
        console.log(res);
        const { token } = res.data;
        sessionStorage.setItem("authToken", token);
        window.location.assign(`/`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Sign In</h1>
        <form className="signin__form" onSubmit={handleSignIn}>
          <div className="signin__form-group">
            <label className="signin__label">Username</label>
            <input
              className="signin__input"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="signin__form-group">
            <label className="signin__label">Password</label>
            <input
              className="signin__input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="signin__button signin__signin">Sign In</button>
          <p className="signin__button-gap">OR</p>
        </form>
        <Link to="/register">
          <button className="signin__button signin__create">
            Create an Account
          </button>
        </Link>
      </div>
      <Cart
        cartItems={cartItems}
        handleRemove={handleRemove}
        showCart={showCart}
        handleCartClick={handleCartClick}
      />
    </div>
  );
}

export default SigninPage;
