import { createSlice } from '@reduxjs/toolkit';

import { fetchUserProfile, fetchUpdateUserName } from '../actions/fetchAPI';

const initialState = {
  userName: null,
  saveName: null,
  firstName: null,
  lastName: null,
  messageErrorUser: null,

  isEdit: false,
  isErrorUser: false,
  isLoadingUser: false,
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
          state.isLoadingUser = true;
          state.messageErrorUser = null;
          state.isErrorUser = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/fulfilled'),
        (state) => {
          state.isErrorUser = false;
          state.isLoadingUser = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoadingUser = false;
          state.messageErrorUser = action.error.message;
          state.isErrorUser = true;
        }
      );
  },
});

export const { setIsEdit, setUserName, setLogout } = userSlice.actions;

export default userSlice.reducer;
