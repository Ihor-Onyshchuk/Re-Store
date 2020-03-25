import React, { Component } from "react";
import BooksListItem from "../bookListItem/bookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/WithBookstoreService";
import { booksLoaded, booksRequested, booksError } from "../../actions/index";
import { compose } from "redux";
import "./bookList.css";
import Spiner from "../spiner/Spiner";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";

class BookList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError
    } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then(data => {
        booksLoaded(data);
      })
      .catch(err => booksError(err));
  }
  render() {
    const { books, loading, error } = this.props;

    if (loading) return <Spiner />;
    if (error) return <ErrorIndicator />;

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
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
