import React, { Component } from "react";
import BooksListItem from "../bookListItem/bookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/WithBookstoreService";
import { fetchBooks, bookAddedToCart } from "../../actions/index";
import { compose, bindActionCreators } from "redux";
import "./bookList.css";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="bookList">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BooksListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) return <Spiner />;
    if (error) return <ErrorIndicator />;
    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
