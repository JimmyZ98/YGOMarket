import React from "react";
import "./CartItem.scss";

function CartItem({posts, darkMode, item , handleRemove}) {

    return(
        <li className={darkMode ? "cart-item darkmode" : "cart-item"}>
            <div className="cart-item__container">
                <img className="cart-item__img" src={item.image} alt="item image" />
                <div className="cart-item__information">
                    <div className="cart-item__information--left">
                        <div className="cart-item__information--top">
                            <h3 className="cart-item__name cart-item__text">{item.cardName}</h3>
                            <p className="cart-item__set-rarity cart-item__text">
                            {item.cardCode} {item.rarity}
                            </p>
                            <p className="cart-item__description cart-item__text">{item.description}</p>
                        </div>
                        <p className="cart-item__item-remove" onClick={()=>handleRemove(item)}>Remove</p>
                    </div>
                    <div className="cart-item__information--right">
                        <p className="cart-item__price cart-item__text">${parseFloat(item.price).toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;