import React from "react";
import Cart from "../../components/Cart/Cart";
import { Link } from "react-router-dom";
import "./SuccessPage.scss";

function SuccessPage({
  cartItems,
  showCart,
  darkMode,
  handleRemove,
  handleCartClick,
}) {
  return (
    <div
      className={
        darkMode ? "success__login-notif darkmodeb" : "success__login-notif"
      }
    >
      Thank you! Your order has been confirmed.
      <span> </span>
      <Link to="/home" className="success__login-notif--text">
        Return to Shop
      </Link>
      <Cart
        cartItems={cartItems}
        handleRemove={handleRemove}
        showCart={showCart}
        handleCartClick={handleCartClick}
      />
    </div>
  );
}

export default SuccessPage;
