import React, { useState } from "react";
import "./Cart.scss";
import { Link } from "react-router-dom";

function Cart({ cartItems, handleRemove, showCart, handleCartClick }) {
  const subtotal = cartItems.reduce((x, y) => x + y.price, 0);

  return (
    <div className="cart">
      <div
        className={showCart ? "cart__show cart__show--active" : "cart__show"}
      >
        <h1>Cart</h1>
        <div className="cart__main">
          <div className="cart__empty">
            {cartItems.length === 0 && <div>Your YGOMarket cart is empty.</div>}
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart__item">
              <p className="cart__item-name">{item.cardName}</p>
              <div className="cart__item--right">
                <p className="cart__item-price">${item.price}</p>
                <p
                  className="cart__item-remove"
                  onClick={() => handleRemove(item)}
                >
                  Remove
                </p>
              </div>
            </div>
          ))}
          <div className="cart__subtotal-container">
            <p className="cart__subtotal-text">Subtotal</p>
            <p className="cart__subtotal">${subtotal}</p>
          </div>
          <Link
            to="/checkout"
            className="cart__checkout-link"
            onClick={handleCartClick}
          >
            <button className="cart__checkout">Proceed to Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
