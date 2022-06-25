import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../../redux/actions/booksAction";
import { fetchMoreBooks } from "../../redux/asyncActions/fetchBooks";

import "./loadMore.sass";

const LoadMore = () => {
  const query = useSelector((state) => state.books.query);
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    query.startIndex += 30;

    dispatch(addQuery(query));
    dispatch(fetchMoreBooks(query));
  };

  return books && books.items?.length ? (
    <button className="load-more" type="button" onClick={handleLoadMore}>
      Load more
    </button>
  ) : null;
};

export default LoadMore;
