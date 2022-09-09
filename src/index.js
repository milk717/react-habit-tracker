import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import rootReducer from "./modules";
import {logger} from "redux-logger/src";
import {configureStore} from "@reduxjs/toolkit";
import {persistStore} from "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <App />
      </PersistGate>
  </Provider>
);

