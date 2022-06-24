import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addBooks, addQuery } from "../../redux/actions/booksAction";
import { fetchBooks } from "../../redux/asyncActions/fetchBooks";

import "./collectionItem.sass";

function CollectionItem({ item }) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.books.query);

  const handleClick = () => {
    const newQuery = {
      title: "",
      subject: `subject:${item.volumeInfo.categories}`,
      sort: `&orderBy=${query.sort.split("=")[1]}`,
      startIndex: 0,
      maxResult: 30,
      author: "",
    };

    dispatch(addBooks(null));
    dispatch(addQuery(newQuery));
    dispatch(fetchBooks(newQuery));
  };

  return (
    <div className="card">
      <Link to={`/${item.id}`}>
        <div className="card--img-container">
          <img
            className="card--img"
            src={
              item.volumeInfo?.imageLinks?.smallThumbnail
                ? item.volumeInfo.imageLinks.smallThumbnail
                : require("../../img/no_cover.png")
            }
            alt="book cover"
          />
        </div>
      </Link>
      <span className="card--category link" onClick={handleClick}>
        {item.volumeInfo?.categories ? item.volumeInfo?.categories[0] : null}
      </span>{" "}
      <br />
      <p className="card--book-title">{item.volumeInfo?.title}</p>
      <p className="card--book-author">
        {item.volumeInfo?.authors?.join(". ")}
      </p>
    </div>
  );
}

export default CollectionItem;
