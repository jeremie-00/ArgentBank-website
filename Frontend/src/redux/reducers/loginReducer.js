import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userName = "";
      state.isLoggedIn = false;
    },
    updateLogName: (state, action) => {
      state.userName = action.payload;
    }
  },
});

export const { login, logout, updateLogName } = loginSlice.actions;

export default loginSlice.reducer;