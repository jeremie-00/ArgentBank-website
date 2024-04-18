import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import loginReducer from "./loginReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    login: loginReducer,
    error: errorReducer,
})

export default rootReducer