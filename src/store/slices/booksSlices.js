import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  books: [],
  totalPages: 0,
  error: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    GET_BOOKS: (state) => ({ ...state, isLoading: true }),
    GET_BOOKS_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      books: payload.data,
      totalPages: payload.totalPages,
    }),
    GET_BOOKS_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

const { actions, reducer } = booksSlice;

export const { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } = actions;

export default reducer;
