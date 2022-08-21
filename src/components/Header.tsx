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

export const BTLogo = ({ size = 44, className }: any) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 254 254"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_125_42230)">
        <g filter="url(#filter0_dd_125_42230)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M121 248C187.826 248 242 193.826 242 127C242 60.1735 187.826 6 121 6C54.1735 6 0 60.1735 0 127C0 193.826 54.1735 248 121 248ZM121 217.75C171.12 217.75 211.75 177.12 211.75 127C211.75 76.8802 171.12 36.25 121 36.25C70.8802 36.25 30.25 76.8802 30.25 127C30.25 177.12 70.8802 217.75 121 217.75Z"
            fill="url(#paint0_radial_125_42230)"
          />
        </g>
        <circle cx="121" cy="127" r="90.75" fill="white" />
        <circle cx="121" cy="127" r="90.75" fill="white" />
        <path
          d="M32.9738 183.375L55.4165 77.1897H90.7874C98.3893 77.1897 104.539 78.1823 109.235 80.1676C113.932 82.1528 117.37 84.8885 119.549 88.3748C121.728 91.861 122.817 95.8557 122.817 100.359C122.817 105.152 121.97 109.365 120.275 112.996C118.629 116.579 116.184 119.582 112.94 122.003C109.744 124.424 105.846 126.336 101.246 127.74V128.321C105.507 129.726 108.897 132.195 111.414 135.73C113.932 139.264 115.191 143.549 115.191 148.585C115.191 156.865 113.279 163.571 109.453 168.704C105.677 173.788 100.568 177.516 94.1284 179.889C87.7369 182.213 80.595 183.375 72.7025 183.375H32.9738ZM66.0931 161.223H72.0488C74.954 161.223 77.4961 160.666 79.675 159.552C81.8539 158.439 83.5486 156.962 84.7591 155.122C86.018 153.233 86.6475 151.151 86.6475 148.876C86.6475 145.535 85.8485 143.041 84.2507 141.395C82.6528 139.748 79.8444 138.925 75.8256 138.925H70.8867L66.0931 161.223ZM75.1719 117.935H80.4013C83.7423 117.935 86.3327 117.451 88.1727 116.483C90.0611 115.466 91.3926 114.086 92.1674 112.343C92.9421 110.6 93.3294 108.59 93.3294 106.314C93.3294 103.942 92.5789 102.126 91.0779 100.867C89.5769 99.5598 87.2527 98.9061 84.1054 98.9061H79.5297L75.1719 117.935ZM141.992 183.375L159.205 100.649H136.181L141.193 77.1897H215.857L210.7 100.649H187.603L170.39 183.375H141.992Z"
          fill="#2E384A"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_125_42230"
          x="-4"
          y="-2"
          width="250"
          height="258"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_125_42230"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_125_42230"
            result="effect2_dropShadow_125_42230"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_125_42230"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_125_42230"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(30.25 58.9375) rotate(37.2348) scale(237.467)"
        >
          <stop stop-color="#EE2E25" />
          <stop offset="0.296875" stop-color="#2E384A" />
          <stop offset="0.835535" stop-color="#2E384A" />
          <stop offset="0.914732" stop-color="#428FBF" />
          <stop offset="1" stop-color="#87AA3E" />
        </radialGradient>
        <clipPath id="clip0_125_42230">
          <rect width="254" height="254" fill="white" />
        </clipPath>
      </defs>
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
                <BTLogo size={40} />
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
                My BT HOP
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
            {pageName || "My BT Hop"}
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
