import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/App";
import ErrorBoundry from "./components/errorBoundry/ErrorBoundry";
import BookstoreService from "./services/BookstoreService";
import { Provider } from "react-redux";
import { BookstoreServiceProvider } from "./components/bookstoreServiceContext/BookstoreServiceContext";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router basename={process.env.PUBLIC_URL}>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
