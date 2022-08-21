import { ReactNode } from "react";
import { MapView } from "../components";

export const Map = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <MapView />
      {children}
    </>
  );
};
