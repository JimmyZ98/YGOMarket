import React, { useState } from "react";
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
  darkMode,
}) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={darkMode ? "home darkmodeb" : "home"}>
      <Filter
        showFilter={showFilter}
        darkMode={darkMode}
        search={search}
        handleSearch={handleSearch}
      />
      <div className="home__main">
        <div className="home__filter-container">
          <button className="home__filter" onClick={handleFilterClick}>
            Filter
          </button>
        </div>
        <h1 className="home__title"> Shop Cards</h1>
        <ul className="home__posts-list">
          {posts
            .filter((x) => {
              if (search == "") {
                return x;
              } else if (
                x.cardName.toLowerCase().includes(search.toLowerCase())
              ) {
                return x;
              }
            })
            .map((post) => (
              <PostItem
                key={post.id}
                post={post}
                handleAdd={handleAdd}
                darkMode={darkMode}
              />
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
