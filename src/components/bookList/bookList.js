import React, { Component } from "react";
import BooksListItem from "../bookListItem/bookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/WithBookstoreService";
import { fetchBooks } from "../../actions/index";
import { compose } from "redux";
import "./bookList.css";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

const BookList = ({ books }) => {
  return (
    <ul className="bookList">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BooksListItem book={book} />
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
    const { books, loading, error } = this.props;

    if (loading) return <Spiner />;
    if (error) return <ErrorIndicator />;
    return <BookList books={books} />;
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
