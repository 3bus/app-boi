import React from "react";
import ReactDOM from "react-dom/client";
import { setup } from "twind";
import * as colors from "twind/colors";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Account, Depatures, Planner, Reserve, Bussin, Earn } from "./screens";

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
        <Route path="/" element={<Navigate to="/planner" replace />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/departures" element={<Depatures />} />
        <Route path="/account" element={<Account />} />
        <Route path="/rewards" element={<Account />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/bussin" element={<Bussin />} />
        <Route path="/earn" element={<Earn />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
