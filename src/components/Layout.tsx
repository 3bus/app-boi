import { ReactNode } from "react";
import { Header, NavigationBar } from "../components";
import { tw, css } from "twind/css";

type Props = {
  children?: ReactNode;
  hasSearch?: boolean;
};

export const Layout = ({ children, hasSearch = true }: Props) => {
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
          "w-full h-full bg-gray-200 relative rounded-2xl shadow-xl ",
        ])}
      >
        <Header hasSearch={hasSearch} />
        <div
          className={tw([
            css`
              max-height: 620px;
            `,
            "h-full",
          ])}
        >
          {children}
        </div>
        <NavigationBar />
      </div>
    </div>
  );
};
