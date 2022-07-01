import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import SellPage from "./pages/SellPage/SellPage";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route path="/home" exact component={HomePage} />
          <Route path="/sell" component={SellPage} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
