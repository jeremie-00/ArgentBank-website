import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    login: loginReducer,
})

export default rootReducer