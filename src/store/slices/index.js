import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import booksSlices from "./booksSlices";

const rootReducer = combineReducers({ auth: authSlice, books: booksSlices });

export default rootReducer;
