import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from "styled-components";

import theme from "./theme";
import reducer from "./reducers";
import App from "./components/App";

const store = configureStore({
  reducer
});

const container = document.getElementById("app");
reactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  container
);
