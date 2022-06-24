import { ADD_BOOK, ADD_BOOKS, ADD_QUERY, LOAD_MORE } from "../const/booksConst";

export const addBooks = (payload) => ({ type: ADD_BOOKS, payload });
export const addQuery = (payload) => ({ type: ADD_QUERY, payload });
export const loadMore = (payload) => ({ type: LOAD_MORE, payload });
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
