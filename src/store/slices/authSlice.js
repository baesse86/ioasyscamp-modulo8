import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state) => ({ ...state, isLoading: true }),
    LOGIN_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      user: payload,
    }),
    LOGIN_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload,
    }),
  },
});

const { actions, reducer } = authSlice;

export const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } = actions;

export default reducer;
