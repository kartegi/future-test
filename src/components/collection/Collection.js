import React from "react";
import { useSelector } from "react-redux";
import CollectionItem from "../collectionItem/CollectionItem";
import Loader from "../loader/Loader";
import LoadMore from "../loadMore/LoadMore";

import "./collection.sass";

function Collection() {
  const books = useSelector((state) => state.books.books);
  const isLoading = useSelector((state) => state.config.isLoading);

  return isLoading ? (
    <div className="loader-container">
      <Loader />
    </div>
  ) : (
    <div className="collection">
      {books && books.items?.length ? (
        <>
          <p className="collection--result-length">
            Found {books.totalItems} results
          </p>
          <div className="collection--items">
            {books.items.map((item, i) => {
              return <CollectionItem item={item} key={i} />;
            })}
          </div>
        </>
      ) : books !== null && !books?.items?.length ? (
        <h2>No result</h2>
      ) : null}
      <div className="collection--load-more">
        <LoadMore />
      </div>
    </div>
  );
}

export default Collection;
