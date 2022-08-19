import React from "react";
import ReactDOM from "react-dom/client";
import { setup } from "twind";
import * as colors from "twind/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planner } from "./screens";

setup({
  theme: {
    extend: {
      colors,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/planner" element={<Planner />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
