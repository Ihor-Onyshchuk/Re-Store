import React from "react";
import "./bookListItem.css";

const BookListItem = ({ book }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="bookListItem">
      <div className="bookCover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="bookDetails">
        <span className="bookTitle">{title}</span>
        <div className="bookAuthor">{author}</div>
        <div className="bookPrice">
          <span>&#36;{price}</span>
        </div>
        <button className="btn btn-info add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default BookListItem;
