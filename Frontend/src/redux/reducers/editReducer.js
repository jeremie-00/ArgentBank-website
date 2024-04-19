import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editName: false,
};

const editSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editName: (state) => {
      state.editName = true;
    },
    exitEditName: (state) => {
        state.editName = false;
    }
  },
});

export const { editName, exitEditName } = editSlice.actions;

export default editSlice.reducer;