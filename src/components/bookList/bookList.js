import React, { Component } from "react";
import BooksListItem from "../bookListItem/bookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/WithBookstoreService";
import { booksLoaded, booksRequested } from "../../actions/index";
import { compose } from "redux";
import "./bookList.css";
import Spiner from "../spiner/Spiner";

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;
    booksRequested();
    bookstoreService.getBooks().then(data => {
      booksLoaded(data);
    });
  }
  render() {
    const { books, loading } = this.props;

    if (loading) return <Spiner />;
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
