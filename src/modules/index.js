import {combineReducers} from "@reduxjs/toolkit";
import habitReducer from "./habitReducer";

const rootReducer = combineReducers({
    habitReducer,
});

export default rootReducer;