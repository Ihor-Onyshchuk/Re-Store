import React from "react";
import "./homePage.css";
import { withRouter } from "react-router-dom";
import BookList from "../../bookList/bookList";
import ShoppingCartTable from "../../shoppingCartTable/shoppingCartTable";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default withRouter(HomePage);
