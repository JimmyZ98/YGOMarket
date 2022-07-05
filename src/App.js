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
const API_URL = process.env.REACT_APP_API_URL;

function App() {
  const [posts, setPosts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

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

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setPosts(response.data);
    });
  }, []);

  if (posts.length === 0) {
    return <h1>loading</h1>;
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
            />
          </Route>
          <Route path="/sell">
            <SellPage
              posts={posts}
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
            />
          </Route>
          <Route path="/checkout">
            <CheckoutPage
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route path="/signin">
            <SigninPage
              cartItems={cartItems}
              handleRemove={handleRemove}
              showCart={showCart}
              handleCartClick={handleCartClick}
            />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
