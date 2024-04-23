import { createSlice } from '@reduxjs/toolkit';

import { fetchLoginToken, fetchUserProfile, fetchUpdateUserName } from '../actions/fetchAPI';

const initialState = {
  userName: null,
  saveName: null,
  firstName: null,
  lastName: null,
  isLoggedIn: false,
  isEdit: false,
  token: null,
  isLoading: false,
  messageError: null,
  isError: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setIsEdit: (state) => {
      state.isEdit = !state.isEdit;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setLogout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoginToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.saveName = state.userName;
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(fetchUpdateUserName.fulfilled, (state, action) => {
        state.userName = action.payload.userName;
      })
      .addCase(fetchUpdateUserName.rejected, (state) => {
        state.userName = state.saveName;
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.isLoading = true;
          state.messageError = null;
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isError = false;
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.messageError = action.error.message;
          state.isError = true;
        }
      );
  },
});

export const { setIsEdit, setUserName, setLogout } = userSlice.actions;

export default userSlice.reducer;
