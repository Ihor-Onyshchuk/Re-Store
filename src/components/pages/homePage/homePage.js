import React from "react";
import "./homePage.css";
import { withRouter } from "react-router-dom";
import BookList from "../../bookList/bookList";

const HomePage = () => {
  return <BookList />;
};

export default withRouter(HomePage);
