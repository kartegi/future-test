import { addBook, addBooks, loadMore } from "../actions/booksAction";
import { setLoading } from "../actions/configActions";

export const fetchBooks = (query) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      let response = await fetch(
        `${process.env.REACT_APP_API_LINK}?q=${query.title}${query.subject}${query.author}${query.sort}&maxResults=${query.maxResult}&key=${process.env.REACT_APP_API_KEY}`
      );
      response = await response.json();
      dispatch(setLoading(false));
      dispatch(addBooks(response));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
  };
};

export const fetchMoreBooks = (query) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_API_LINK}?q=${query.title}${query.subject}${query.author}${query.sort}&maxResults=${query.maxResult}&startIndex=${query.startIndex}&key=${process.env.REACT_APP_API_KEY}`
      );
      response = await response.json();
      dispatch(loadMore(response));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchBook = (id) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      response = await response.json();
      dispatch(addBook(response));
    } catch (error) {
      console.log(error);
    }
  };
};
