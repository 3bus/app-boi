import { ReactNode } from "react";
import { tw } from "twind";
import { css } from "twind/css";
import { Header, NavigationBar } from "../components";

type Props = {
  children?: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={tw`w-screen h-screen flex flex-row sm:justify-center sm:items-center`}
    >
      <div
        className={tw([
          css`
            max-width: 390px;
            max-height: 844px;
          `,
          "w-full h-full bg-gray-200 relative",
        ])}
      >
        <Header />
        {children}
        <NavigationBar />
      </div>
    </div>
  );
};
