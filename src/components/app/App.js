import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import HomePage from "../pages/homePage/homePage";
import CartPage from "../pages/cartPage/cartPage";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
};

export default App;
