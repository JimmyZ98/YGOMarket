import React from "react";
import "./PostItem.scss";

function PostItem({ post, handleAdd, darkMode }) {

  return (
    <li className={darkMode ? "post darkmode" : "post"}>
      <div className="post__container">
        <img className="post__img" src={post.image} alt="yugioh card" />
        <div className="post__information">
          <div className="post__information--top">
            <h3 className="post__name post__text">{post.cardName}</h3>
            <p className="post__set-rarity post__text">
              {post.cardCode} {post.rarity}
            </p>
            <p className="post__description post__text">{post.description}</p>
          </div>
          <div className="post__information--bottom">
            <p className="post__price post__text">${parseFloat(post.price).toFixed(2)}</p>
            <p className="post__market-price post__text">
              Market price: ${parseFloat(post.marketPrice).toFixed(2)}
            </p>
            <button
              className={darkMode ? "post__add darkmodebtn" : "post__add"}
              onClick={() => handleAdd(post)}
            >
              Add to Cart <i className="fas fa-plus-square post__add-icon"></i>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PostItem;
