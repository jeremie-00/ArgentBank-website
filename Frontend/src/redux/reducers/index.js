import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import errorReducer from "./errorReducer";
import editReducer from "./editReducer";

const rootReducer = combineReducers({
    user: userReducer,
    login: loginReducer,
    error: errorReducer,
    edit: editReducer,
})

export default rootReducer