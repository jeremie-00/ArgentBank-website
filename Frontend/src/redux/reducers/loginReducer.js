import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = "";
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;