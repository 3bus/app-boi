import { ReactNode, useMemo, useRef, useState } from "react";
import { Header, NavigationBar } from "../components";
import { tw, css } from "twind/css";
import { useHeight } from "../hooks";

type Props = {
  children?: ReactNode;
  hasSearch?: boolean;
};

//Get footer and header height and then screen container height,

export const Layout = ({ children, hasSearch = true }: Props) => {
  const [openNav, setOpenNav] = useState(false);
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const containerRef = useRef(null);
  const headerHeight = useHeight(headerRef);
  const footerHeight = useHeight(footerRef);
  const containerHeight = useHeight(containerRef);
  const contentHeight = useMemo(() => {
    if (
      containerHeight === undefined ||
      footerHeight === undefined ||
      headerHeight === undefined
    )
      return 0;

    return containerHeight - footerHeight - headerHeight;
  }, [headerHeight, footerHeight, containerHeight]);

  return (
    <div
      className={tw`w-screen h-screen flex flex-row sm:justify-center sm:items-center `}
      onClick={() => openNav && setOpenNav(!openNav)}
    >
      <div
        ref={containerRef}
        className={tw([
          css`
            max-width: 390px;
            max-height: 844px;
          `,
          "w-full h-full bg-gray-200 relative sm:rounded-2xl shadow-xl overflow-hidden",
        ])}
      >
        <Header
          hasSearch={hasSearch}
          ref={headerRef}
          setOpenNav={setOpenNav}
          openNav={openNav}
        />
        <div
          className={tw([
            css`
              height: ${contentHeight}px;
            `,
            "overflow-scroll",
          ])}
        >
          {children}
        </div>
        <NavigationBar ref={footerRef} />
      </div>
    </div>
  );
};
