import { apply, tw } from "twind";
import { HiMenu } from "react-icons/hi";
import { FaBell } from "react-icons/fa";
import { AddressSearch } from "./AddressSearch";
import { forwardRef } from "react";
import { VscClose } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { animation, css } from "twind/css";
import {
  ATHopIcon,
  JourneyPlannerIcon,
  LiveDepartureIcon,
} from "./NavigationBar";
import { useDelayUnmount } from "../hooks";
import { useSearchTerm } from "../contexts/SearchContext";

type Props = {
  pageName?: string;
  hasSearch?: boolean;
  openNav: boolean;
  setOpenNav: (state: boolean) => void;
};

export const ATLogo = ({ size = 44 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>logo-AT-operational@3x</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Logos"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="logo-AT-operational">
          <path
            d="M44,22 C44,34.1513333 34.1497037,44 21.9991852,44 C9.8502963,44 0,34.1505185 0,22 C0,9.8502963 9.8502963,0 21.9991852,0 C34.1497037,0 44,9.8502963 44,22"
            id="Path"
            fill="#FFFFFF"
          ></path>
          <path
            d="M27.4551852,6.402 C30.137532,7.34274933 32.5323422,8.95855867 34.4088148,11.0937037 L38.975037,11.0937037 C36.5739235,7.36305841 33.0141609,4.52412268 28.8428148,3.01318519 L27.4551852,6.402 L27.4551852,6.402 Z"
            id="Path"
            fill="#EE2E27"
          ></path>
          <path
            d="M13.5528148,40.3276296 L14.9428889,36.9404444 C17.1483047,37.9864506 19.5591024,38.5278432 22,38.5252593 C23.9131852,38.5252593 25.7497778,38.1968889 27.4584444,37.598 L28.8460741,40.986 C26.6504309,41.7774872 24.3339447,42.1813973 22,42.1797195 C19.0831566,42.1833667 16.2005512,41.5513457 13.5528148,40.3276296"
            id="Path"
            fill="#87AA3E"
          ></path>
          <path
            d="M13.5528148,40.3276296 L14.9428889,36.9404444 C12.9031355,35.9737546 11.0818763,34.6013641 9.59037037,32.9071111 L5.02577778,32.9071111 C7.10770692,36.1385111 10.0648549,38.7119222 13.5528148,40.3276296"
            id="Path"
            fill="#428FBF"
          ></path>
          <path
            d="M22,1.82028971 C24.3330945,1.81840971 26.6487647,2.222046 28.8436296,3.01318519 L28.8436296,3.01318519 L27.456,6.402 C25.7481481,5.80392593 23.9131852,5.47555556 22,5.47555556 C12.8732593,5.47555556 5.47555556,12.8740741 5.47555556,22 C5.47462186,23.6103127 5.70933046,25.2120959 6.17222222,26.7544444 L6.17222222,26.7544444 L11.3919259,13.9414815 C11.9435556,12.9922222 13.0354074,12.8602222 13.323037,12.8431111 L13.323037,12.8431111 L17.2944444,12.8431111 L24.8013333,31.1577037 L21.023037,31.1577037 C19.9790553,31.1565065 19.0423612,30.515985 18.6625185,29.5435556 L18.6625185,29.5435556 L17.9601481,27.8275556 L11.1303704,27.8275556 L9.77207407,31.1585185 L4.02192593,31.1634074 C2.618,28.4125926 1.82111111,25.3008148 1.82111111,22 C1.82111111,10.8557778 10.854963,1.82028971 22,1.82028971 Z M14.5493333,19.4398519 L12.9637037,23.328963 L16.1300741,23.328963 L14.5493333,19.4398519 Z"
            id="Combined-Shape"
            fill="#001231"
            fill-rule="nonzero"
          ></path>
          <path
            d="M39.9772593,12.8374074 L26.2737037,12.8374074 C25.9632593,12.8594074 24.6921481,13.0158519 24.2057037,14.2136296 L22.9272593,17.3433333 L27.0225185,17.3433333 L24.0158519,24.609037 L26.7031111,31.1585185 L32.4125185,17.3433333 L37.8571111,17.3433333 C38.2905926,18.8205926 38.5252593,20.3817778 38.5252593,21.9991852 C38.5252593,29.2127407 33.9028148,35.3425926 27.4592593,37.598 L28.8468889,40.986 C36.6202222,38.1814074 42.1805185,30.7413333 42.1805185,22 C42.1805185,18.7 41.3828148,15.5882222 39.9772593,12.8374074"
            id="Path"
            fill="#001231"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const fadeIn = animation(
  {
    animationDuration: "0.5s",
    animationTimingFunction: "ease",
    animationIterationCount: 1,
  },
  {
    "from, 0%, to": {
      opacity: 0,
    },
    "100%": {
      opacity: 0.3,
    },
  }
);

const fadeOut = animation(
  {
    animationDuration: "0.5s",
    animationTimingFunction: "ease",
    animationIterationCount: 1,
  },
  {
    "from, 0%, to": {
      opacity: 0.3,
    },
    "100%": {
      opacity: 0,
    },
  }
);

const slideIn = animation(
  {
    animationDuration: "0.5s",
    animationTimingFunction: "ease",
    animationIterationCount: 1,
  },
  {
    "from, 0%, to": {
      transform: "translateX(-100%)",
    },
    "100%": {
      transform: "translateX(0)",
    },
  }
);

const slideOut = animation(
  {
    animationDuration: "0.5s",
    animationTimingFunction: "ease",
    animationIterationCount: 1,
  },
  {
    "from, 0%, to": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-100%)",
    },
  }
);

const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
  tw([
    apply`flex flex-row w-full border-y border-blueGray-800 gap-4 items-center py-4 px-6 text-sm relative`,
    {
      "bg-blueGray-800 text-white border-none border-l-4 border-blue-400":
        isActive,
    },
  ]);

export const Header = forwardRef(
  ({ pageName, hasSearch = true, openNav, setOpenNav }: Props, ref: any) => {
    const shouldRenderMenu = useDelayUnmount(openNav, 500);
    const { searchTerm, setSearchTerm } = useSearchTerm();

    const renderMenu = () => {
      return (
        <>
          <div
            className={tw([
              `w-full h-full absolute top-0 bg-white left-0 z-10`,
              css`
                ${openNav ? fadeIn : fadeOut}
                opacity : 0.3
              `,
            ])}
            onClick={() => {
              setOpenNav(false);
            }}
          ></div>
          <div
            className={tw` ${
              openNav ? slideIn : slideOut
            } absolute top-0 left-0 z-20 h-full w-3/4 bg-blueGray-700 text-white`}
          >
            <div className={tw`divide-y divide-blueGray-800`}>
              <div className={tw`p-4 flex flex-row items-center gap-x-1`}>
                <ATLogo size={40} />
                <p className={tw`font-semibold text-2xl`}>Mobile</p>
              </div>
              <NavLink to="/planner" className={navLinkStyles}>
                <JourneyPlannerIcon width={24} height={24} />
                Journey Planner
              </NavLink>
              <NavLink to="/departures" className={navLinkStyles}>
                <LiveDepartureIcon width={24} height={24} />
                Live Departures
              </NavLink>
              <NavLink to="/account" className={navLinkStyles}>
                <ATHopIcon width={24} height={24} />
                My AT HOP
              </NavLink>
            </div>
          </div>
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={tw`flex flex-col gap-y-4 p-4 bg-blueGray-800 w-full `}
      >
        {shouldRenderMenu && renderMenu()}
        <div
          className={tw`  text-white flex flex-row justify-between items-center`}
        >
          <HiMenu size={24} onClick={() => setOpenNav(true)} />
          <p className={tw`text-white font-semibold text-sm`}>
            {pageName || "My AT Hop"}
          </p>
          <FaBell size={18} />
        </div>
        {hasSearch && (
          <AddressSearch
            onSelect={(results) => {
              setSearchTerm(results.features[0].properties.address_line1 || "");
            }}
          />
        )}
      </div>
    );
  }
);
