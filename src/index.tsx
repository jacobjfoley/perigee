import React from "react";
import reactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import reducer from "./reducers";

interface WelcomeProps {}

const Welcome = () => {
  return <h1>Hello, React!</h1>;
};

const store = configureStore({
  reducer
});

const container = document.getElementById("app");
reactDOM.render(
  <Provider store={store}>
    <Welcome />
  </Provider>,
  container
);
