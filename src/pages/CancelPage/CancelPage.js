import React from "react";
import Cart from "../../components/Cart/Cart";
import { Link } from "react-router-dom";

function CancelPage({
  cartItems,
  showCart,
  darkMode,
  handleRemove,
  handleCartClick,
}) {
  return (
    <div
      className={darkMode ? "sell__login-notif darkmodeb" : "sell__login-notif"}
    >
      Uh oh there was an issue. Transaction cancelled.
      <span> </span>
      <Link to="/home" className="sell__login-notif--text">
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
