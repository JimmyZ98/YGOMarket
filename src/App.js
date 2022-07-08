import "./App.scss";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SellPage from "./pages/SellPage/SellPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import axios from "axios";
import SigninPage from "./pages/SigninPage/SigninPage";
import CreateAccountPage from "./pages/CreateAccountPage/CreateAccountPage";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAdd = (post) => {
    if (cartItems.find((x) => x.id === post.id)) {
      alert("Item is already in cart!");
    } else {
      setCartItems([...cartItems, post]);
    }
  };

  const handleRemove = (post) => {
    setCartItems(cartItems.filter((x) => x.id !== post.id));
  };

  const handleClickMenu = () => {
    setMenu((prevMenu) => !prevMenu);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart((prevShowCart) => !prevShowCart);
    setMenu(false);
  };

  const handleEmptyCart = () => {
    setCartItems([]);
  };

  const handleFilterClick = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };

  const handleDark = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="loading">
        <ClimbingBoxLoader
          className="loading__loader"
          color={"#f72585"}
          size={50}
        />
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          menu={menu}
          showCart={showCart}
          handleClickMenu={handleClickMenu}
          handleCartClick={handleCartClick}
          darkMode={darkMode}
          handleDark={handleDark}
        />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home">
            <HomePage
              posts={posts}
              cartItems={cartItems}
              handleAdd={handleAdd}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              showFilter={showFilter}
              handleFilterClick={handleFilterClick}
              darkMode={darkMode}
            />
          </Route>
          <Route path="/sell">
            <SellPage
              posts={posts}
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              darkMode={darkMode}
            />
          </Route>
          <Route path="/checkout">
            <CheckoutPage
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              handleEmptyCart={handleEmptyCart}
              darkMode={darkMode}
            />
          </Route>
          <Route path="/signin">
            <SigninPage
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              darkMode={darkMode}
            />
          </Route>
          <Route path="/register">
            <CreateAccountPage
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              darkMode={darkMode}
            />
          </Route>
        </Switch>
        <Footer darkMode={darkMode} />
      </BrowserRouter>
    </div>
  );
}

export default App;
