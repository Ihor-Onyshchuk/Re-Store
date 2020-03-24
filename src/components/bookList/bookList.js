import React, { Component } from "react";
import BooksListItem from "../bookListItem/bookListItem";
import { connect } from "react-redux";
import withBookstoreService from "../hoc/WithBookstoreService";
import { booksLoaded } from "../../actions/index";
import { bindActionCreators, compose } from "redux";

class BookList extends Component {
  componentDidMount() {
    // 1. receive data
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    // 2. dispatch action to store
    this.props.booksLoaded(data);
  }
  render() {
    const { books } = this.props;
    return (
      <ul>
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

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
