import { ADD_BOOK, ADD_BOOKS, ADD_QUERY, LOAD_MORE } from "../const/booksConst";

const initState = {
  books: null,
  query: {},
  book: {},
};

const booksReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_BOOKS:
      return { ...state, books: payload };
    case ADD_QUERY:
      return { ...state, query: payload };
    case LOAD_MORE:
      return {
        ...state,
        books: {
          ...state.books,
          items: [...state.books.items, ...payload.items],
        },
      };
    case ADD_BOOK:
      return { ...state, book: payload };
    default:
      return state;
  }
};

export default booksReducer;
