import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import booksSlices from "./booksSlices";
import themeSlice from "./themeSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  books: booksSlices,
  theme: themeSlice,
});

export default rootReducer;
