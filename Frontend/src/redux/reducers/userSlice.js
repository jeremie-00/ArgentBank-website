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
    setResetUser: () => initialState,
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoadingUser = false;
        state.saveName = action.payload.userName;
        state.userName = action.payload.userName;
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.messageErrorUser = action.error.message;
        state.isErrorUser = true;
      })


      .addCase(fetchUpdateUserName.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(fetchUpdateUserName.fulfilled, (state) => {
        state.isLoadingUser = false;
        state.saveName = state.userName;
      })
      .addCase(fetchUpdateUserName.rejected, (state, action) => {
        state.isLoadingUser = false;
        state.userName = state.saveName;
        state.messageErrorUser = action.error.message;
        state.isErrorUser = true;
      });
  },
});

export const { setIsEdit, setUserName, setResetUser } = userSlice.actions;

export default userSlice.reducer;
