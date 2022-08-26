import React from "react";
import Cart from "../../components/Cart/Cart";
import { Link } from "react-router-dom";
import "./CancelPage.scss";

function CancelPage({
  cartItems,
  showCart,
  darkMode,
  handleRemove,
  handleCartClick,
}) {
  return (
    <div
      className={
        darkMode ? "cancel__login-notif darkmodeb" : "cancel__login-notif"
      }
    >
      Uh oh there was an issue. Transaction cancelled.
      <span> </span>
      <Link to="/home" className="cancel__login-notif--text">
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

export default CancelPage;
