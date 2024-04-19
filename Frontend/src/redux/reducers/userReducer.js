import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName : "",
  lastName : "",
  userName : "",
  email : "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userProfile: (state, action) => {
      state.firstName = action.payload.body.firstName;
      state.lastName = action.payload.body.lastName;
      state.userName = action.payload.body.userName;
      state.email = action.payload.body.email;
    },
    clearUserProfil: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
      state.email = "";
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    }
  },
});

export const { userProfile, clearUserProfil, updateUserName } = userSlice.actions;

export default userSlice.reducer;

