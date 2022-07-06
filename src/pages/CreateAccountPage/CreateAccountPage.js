import React from "react";
import "./CreateAccountPage.scss";
import Cart from "../../components/Cart/Cart";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

function CreateAccountPage({
  cartItems,
  handleRemove,
  showCart,
  handleCartClick,
  darkMode,
}) {
  const handleRegister = (e) => {
    e.preventDefault();
    if (e.target.password.value.length < 8) {
      alert("Please enter a password with at least 8 characters.");
    } else {
      axios
        .post(`${API_URL}/register`, {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          username: e.target.username.value,
          password: e.target.password.value,
        })
        .then((res) => {
          alert(res.data);
          if (res.data === "Signed up!") {
            window.location.assign(`/signin`);
          }
        });
    }
  };
  return (
    <div className={darkMode ? "register darkmodeb" : "register"}>
      <div
        className={
          darkMode ? "register__container darkmode" : "register__container"
        }
      >
        <h1 className="register__title">Create an Account</h1>
        <form className="register__form" onSubmit={handleRegister}>
          <div className="register__form-group">
            <label className="register__label">First name</label>
            <input
              className="register__input"
              type="text"
              name="firstName"
              placeholder="First name"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label">Last name</label>
            <input
              className="register__input"
              type="text"
              name="lastName"
              placeholder="Last name"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label">Username</label>
            <input
              className="register__input"
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="register__form-group">
            <label className="register__label">Password</label>
            <input
              className="register__input"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="register__button register__create">
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

export default CreateAccountPage;
