import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }),
  },
});

const { actions, reducer } = themeSlice;

export const { TOGGLE_THEME } = actions;

export default reducer;
