import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import CartPage from "../pages/cartPage/cartPage";
import ShopHeader from "../shopHeader/shopHeader";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </main>
  );
};

export default App;
