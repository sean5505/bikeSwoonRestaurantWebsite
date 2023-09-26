import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import AppProviders from "./context/AppProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProviders>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProviders>
  </React.StrictMode>
);