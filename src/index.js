import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { combineReducers, createStore, compose } from "redux";
import { Provider } from "react-redux";
import posts from "./store/reducers/posts";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({ posts });

const store = createStore(rootReducer, composeEnhancers());

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
