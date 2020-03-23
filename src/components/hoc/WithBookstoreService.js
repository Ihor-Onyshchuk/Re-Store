import React from "react";
import { BookstoreServiceProvider } from "../bookstoreServiceContext/BookstoreServiceContext";

const withBookstoreService = () => Wrapped => {
  return props => {
    return (
      <BookstoreServiceProvider>
        {bookstoreService => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceProvider>
    );
  };
};

export default withBookstoreService;
