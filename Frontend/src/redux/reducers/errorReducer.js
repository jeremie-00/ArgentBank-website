import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  isError: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action) => {
        state.message = action.payload;
        state.isError = true;
    },
    clearError: (state) => {
        state.message = "";
        state.isError = false;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;