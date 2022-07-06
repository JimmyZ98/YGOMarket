import React from "react";
import "./HomePage.scss";
import PostItem from "../../components/PostItem/PostItem";
import Cart from "../../components/Cart/Cart";
import Filter from "../../components/Filter/Filter";

function HomePage({
  posts,
  cartItems,
  handleAdd,
  handleRemove,
  showCart,
  handleCartClick,
  showFilter,
  handleFilterClick,
}) {
  return (
    <div className="home">
      <Filter showFilter={showFilter} />
      <div className="home__main">
        <div className="home__filter-container">
          <button className="home__filter" onClick={handleFilterClick}>
            Filter
          </button>
        </div>
        <h1 className="home__title"> Shop Cards</h1>
        <ul className="home__posts-list">
          {posts.map((post) => (
            <PostItem key={post.id} post={post} handleAdd={handleAdd} />
          ))}
        </ul>
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

export default HomePage;
