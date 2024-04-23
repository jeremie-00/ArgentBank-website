import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";

const rootReducer = combineReducers({
    user: userSlice,
    auth: authSlice,
})

export default rootReducer