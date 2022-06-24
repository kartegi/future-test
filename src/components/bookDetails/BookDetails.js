import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addBooks, addQuery } from "../../redux/actions/booksAction";
import { fetchBook, fetchBooks } from "../../redux/asyncActions/fetchBooks";

import "./bookDetails.sass";

function BookDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.book);
  const navigate = useNavigate();
  const query = useSelector((state) => state.books.query);

  useEffect(() => {
    dispatch(fetchBook(id));
  }, [id, dispatch]);

  const handleAuthorSearch = (author) => {
    const newQuery = {
      title: "",
      subject: "",
      author: `inauthor:${author.replaceAll(" ", "+")}`,
      sort: `&orderBy=${query.sort.split("=")[1]}`,
      startIndex: 0,
      maxResult: 30,
    };

    dispatch(addBooks(null));
    dispatch(addQuery(newQuery));
    dispatch(fetchBooks(newQuery));
    navigate("/");
  };

  return (
    <div className="book-details">
      <div className="book-details--img-container">
        <img
          className="book-details--img"
          src={
            book.volumeInfo?.imageLinks?.thumbnail
              ? book.volumeInfo?.imageLinks?.thumbnail
              : require("../../img/no_cover.png")
          }
          alt="book cover"
        />
      </div>
      <div className="book-details--info">
        <div className="book-details--category">
          {book.volumeInfo?.categories
            ? book.volumeInfo?.categories.join(". ")
            : null}
        </div>
        <h2 className="book-details--title">{book.volumeInfo?.title}</h2>
        {book.volumeInfo?.authors
          ? book.volumeInfo?.authors.map((author, i) => (
              <span key={i}>
                <span
                  className="book-details--author link"
                  onClick={() => handleAuthorSearch(author)}
                >
                  {author}.
                </span>
                &nbsp;
              </span>
            ))
          : null}
        <div className="book-details--description">
          {book.volumeInfo?.description}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
