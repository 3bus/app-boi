import React from "react";
import ReactDOM from "react-dom/client";
import { setup } from "twind";
import * as colors from "twind/colors";
import { BrowserRouter } from "react-router-dom";
import { SearchContextContextProvider } from "./contexts/SearchContext";
import { App } from "./App";

setup({
  theme: {
    extend: {
      colors,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SearchContextContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchContextContextProvider>
  </React.StrictMode>
);
