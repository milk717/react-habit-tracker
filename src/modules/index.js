import {combineReducers} from "@reduxjs/toolkit";
import habitReducer from "./habitReducer";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    habitReducer,
});

export default persistReducer(persistConfig, rootReducer);