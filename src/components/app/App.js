import React from "react";
import "./App.css";
import withBookstoreService from "../hoc/WithBookstoreService";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <div>ReStore</div>;
};

export default withBookstoreService()(App);
