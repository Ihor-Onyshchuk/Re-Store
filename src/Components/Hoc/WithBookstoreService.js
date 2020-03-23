import React from "react";
import { BookstoreServiceProvider } from "../BookstoreServiceContext/BookstoreServiceContext";

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
