import { useMemo } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { tw } from "twind";
import { Layout } from "./components";
import { Account, Reserve, Bussin, Earn, Map } from "./screens";

export const App = () => {
  const { pathname: location } = useLocation();
  const memoMap = <Map/>;

  return (
    <Layout
      hasSearch={
        location === "/planner" || location === "/departures" ? true : false
      }
    >
      <Routes>
        <Route path="/" element={<Navigate to="/planner" replace />} />
        <Route path="/planner" element={<span key="abc" className={tw`h-full`}>{memoMap}</span>} />
        <Route path="/departures" element={<span key="abc" className={tw`h-full`}>{memoMap}</span>} />
        <Route path="/account" element={<><span key="abc" className={tw`hidden absolute opacity-0`}>{memoMap}</span><Account /></>} />
        <Route path="/reserve" element={<><span key="abc" className={tw`hidden absolute opacity-0`}>{memoMap}</span><Reserve /></>} />
        <Route path="/bussin" element={<><span key="abc" className={tw`hidden absolute opacity-0`}>{memoMap}</span><Bussin /></>} />
        <Route path="/earn/:id" element={<><span key="abc" className={tw`hidden absolute opacity-0`}>{memoMap}</span><Earn /></>} />
      </Routes>
    </Layout>
  );
};
