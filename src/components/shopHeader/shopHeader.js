import React from "react";
import "./shopHeader.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shopHeader row">
      <Link to="/">
        <div className="logo text-dark" href="#">
          ReStore
        </div>
      </Link>

      <Link to="/cart">
        <div className="shoppingCart">
          <i className="cartIcon fa fa-shopping-cart" />
          {numItems} items (&#36;{total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
