import { combineReducers } from "redux";
import booksReducer from "./booksReducer";
import configReducer from "./configReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  config: configReducer,
});

export default rootReducer;
