import React, { useState } from "react";
import Cart from "../../components/Cart/Cart";
import "./SigninPage.scss";

function SigninPage({ cartItems, handleRemove, showCart, handleCartClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Sign In</h1>
        <form className="signin__form">
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
          <button className="signin__button signin__create">
            Create an Account
          </button>
        </form>
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
