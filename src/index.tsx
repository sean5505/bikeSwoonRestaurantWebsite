import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import AppProviders from "./context/AppProviders";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";


 const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProviders>
      <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        </QueryClientProvider >
      </Provider>
    </AppProviders>
  </React.StrictMode>
);