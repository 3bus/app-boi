import { ReactNode } from "react";
import { Header, NavigationBar } from "../components";
import { tw, css } from "twind/css";
import MapView from "./MapView";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={tw`w-screen h-screen flex flex-row sm:justify-center sm:items-center `}
    >
      <div
        className={tw([
          css`
            max-width: 390px;
            max-height: 844px;
          `,
          "w-full h-full bg-gray-200 relative rounded-2xl shadow-xl overflow-hidden",
        ])}
      >
        <Header />
        {children}
        <NavigationBar />
        <MapView />
      </div>
    </div>
  );
};
