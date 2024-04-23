import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  userName: null,
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
        (state, action) => {
          state.isError = false;
          state.isLoading = false;
          if (action.type.startsWith('user/login')) {
            state.token = action.payload;
            state.isLoggedIn = true;
            state.isLoading = true;
          } else if (action.type.startsWith('user/profile')) {
            state.userName = action.payload.userName;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
          } else if (action.type.startsWith('user/userName')) {
            state.userName = action.payload;
          }
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
