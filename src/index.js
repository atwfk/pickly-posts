import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import posts from "./store/reducers/posts";

const rootReducer = combineReducers({ posts });

const store = configureStore({
  reducer: rootReducer,
});

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
