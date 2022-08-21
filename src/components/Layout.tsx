import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
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
  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (!headerRef?.current || !footerRef?.current || !containerRef?.current)
      return;
    const obs = new ResizeObserver(() => {
      const containerHeight =
        containerRef?.current?.getBoundingClientRect().height;
      const footerHeight = footerRef?.current?.getBoundingClientRect().height;
      const headerHeight = headerRef?.current?.getBoundingClientRect().height;
      if (
        containerHeight === undefined ||
        footerHeight === undefined ||
        headerHeight === undefined
      ) {
        setContentHeight(0);
        return;
      }
      const out = containerHeight - footerHeight - headerHeight;
      setContentHeight(out);
    });

    obs.observe(headerRef.current);
    obs.observe(footerRef.current);
    obs.observe(containerRef.current);

    return () => obs.disconnect();
  }, [headerRef, footerRef, containerRef]);

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
