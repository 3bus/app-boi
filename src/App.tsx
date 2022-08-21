import { useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components";
import { Account, Reserve, Bussin, Earn, Map } from "./screens";

export const App = () => {
  const { pathname: location } = useLocation();
  const memoMap = useMemo(() => <Map />, []);

  return (
    <Layout
      hasSearch={
        location === "/planner" || location === "/departures" ? true : false
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/planning" replace />} />
        <Route path="/planner" element={memoMap} />
        <Route path="/departures" element={memoMap} />
        <Route path="/account" element={<Account />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/bussin" element={<Bussin />} />
        <Route path="/earn/:id" element={<Earn />} />
      </Routes>
    </Layout>
  );
};
