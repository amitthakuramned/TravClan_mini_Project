import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/header";
import Instaclone from "./screens/Instaclone";
import Roadmap from "./screens/roadmap";
import Learntoolkit from "./screens/learntoolkit";
import Footer from "./components/footer";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
// import store from "./store";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";

const store = configureStore({
  reducer: userReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Learntoolkit />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
