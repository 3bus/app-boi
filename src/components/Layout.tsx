import { ReactNode, useState } from "react";
import { Header, NavigationBar } from "../components";
import { tw, css } from "twind/css";

type Props = {
  children?: ReactNode;
  hasSearch?: boolean;
};

export const Layout = ({ children, hasSearch = true }: Props) => {
  const [openNav, setOpenNav] = useState(false)
  
  return (
    <div
      className={tw`w-screen h-screen flex flex-row sm:justify-center sm:items-center `}
      onClick={() => openNav && setOpenNav(!openNav)}
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
        <Header hasSearch={hasSearch} setOpenNav={setOpenNav} openNav={openNav}/>
        <div
          className={tw([
            hasSearch
              ? css`
                  max-height: 620px;
                `
              : css`
                  max-height: 676px;
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
