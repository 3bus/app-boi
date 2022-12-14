import { forwardRef, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { apply, tw } from "twind";
import { css } from "twind/css";

export const NavigationBar = forwardRef((_, ref: any) => {
  return (
    <div
      ref={ref}
      className={tw([
        `absolute w-full bottom-0 border-t-2 border-blueGray-200 bg-white px-2 pt-2 pb-10 shadow-md flex flex-row justify-between items-center`,
      ])}
    >
      <NavigationIcon Icon={<JourneyPlannerIcon />} to="/planner">
        Journey Planner
      </NavigationIcon>

      <NavigationIcon Icon={<LiveDepartureIcon />} to="/departures">
        Live Depatures
      </NavigationIcon>
      <NavigationIcon Icon={<ATHopIcon />} to="/account">
        My BT HOP
      </NavigationIcon>
    </div>
  );
});

type NavigationIconProps = {
  Icon: ReactNode;
  children: ReactNode;
  to: string;
};

type NavLinkStyleProps = {
  isActive: boolean;
};

export const JourneyPlannerIcon = ({ height = 32, width = 32, ...props }) => {
  return (
    <svg {...props} width={width} height={height} viewBox="0 0 32 32">
      <defs>
        <path
          id="f9a28cfb-c2ad-4d05-b76c-c168906c07cb"
          d="M7.816 9.413C3.498 9.413 0 13.073 0 17.585 0 23.942 7.816 31 7.816 31s7.818-7.058 7.818-13.415c0-4.512-3.499-8.172-7.818-8.172zm0 13.317c-2.936 0-5.317-2.42-5.317-5.408 0-2.986 2.38-5.407 5.317-5.407 2.937 0 5.319 2.42 5.319 5.407s-2.382 5.408-5.319 5.408zm18.078-6.391s5.374-4.852 5.374-9.22c0-3.104-2.406-5.619-5.374-5.619-2.97 0-5.374 2.515-5.374 5.618 0 4.37 5.374 9.221 5.374 9.221zm-3.656-9.402c0-2.052 1.637-3.717 3.656-3.717s3.656 1.664 3.656 3.717c0 2.054-1.637 3.718-3.656 3.718s-3.656-1.665-3.656-3.718zm3.656-1.48c.809 0 1.466.663 1.466 1.483 0 .82-.657 1.484-1.466 1.484-.81 0-1.466-.664-1.466-1.484s.657-1.483 1.466-1.483zm1.087 23.986h-1.008v1.484l1.07-.003c.362-.03.705-.08 1.025-.148l-.3-1.453c-.267.057-.55.097-.787.12zm-3.94 0h1.955v1.484h-1.954v-1.484zm-2.93 0h1.954v1.484H20.11v-1.484zm-2.932 0h1.954v1.484H17.18v-1.484zm-2.93 0h1.954v1.484h-1.955v-1.484zM9.77 30.927h3.5v-1.484h-1.954l-1.546 1.484zm18.809-1.848l.545 1.379c.771-.31 1.4-.774 1.867-1.375l-1.151-.92c-.31.399-.723.698-1.261.916zm1.954-3.251c-.012.64-.115 1.2-.305 1.663l1.355.567c.26-.635.4-1.375.416-2.202l-1.466-.028zm1.413-1.065c-.101-.834-.353-1.565-.744-2.167l-1.225.813c.267.412.441.928.515 1.537l1.454-.183zm-3.926-2.641c.587.154 1.076.392 1.45.71l.944-1.133c-.542-.463-1.225-.803-2.027-1.013l-.367 1.436zm-.858-.159l.162-1.473-2.034-.03v1.483l1.628-.002.244.022zM22.36 20.46h1.954v1.483H22.36V20.46zm-.977 1.483v-1.484l-1.305.003a4.79 4.79 0 0 1-.5-.068l-.287 1.455c.209.043.428.073.725.096l1.367-.002zm-3.212-.487l.686-1.31c-.419-.225-.673-.557-.805-1.048l-1.413.39c.236.886.751 1.548 1.532 1.968zm.144-4.584l-1.187-.87c-.424.593-.638 1.358-.638 2.312l1.466-.038c0-.598.12-1.07.36-1.404zm1.7-.781h.313v-1.484l-.374.002c-.734.06-1.364.24-1.871.532l.725 1.29c.322-.184.748-.3 1.208-.34zm1.291 0h2.932l-1.55-1.484h-1.382v1.484z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bf9a28cfb-c2ad-4d05-b76c-c168906c07cb" fill="currentColor">
          <use xlinkHref="#f9a28cfb-c2ad-4d05-b76c-c168906c07cb"></use>
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#f9a28cfb-c2ad-4d05-b76c-c168906c07cb"
        ></use>
        <g
          fill="currentColor"
          mask="url(#bf9a28cfb-c2ad-4d05-b76c-c168906c07cb)"
        >
          <path d="M0 0h32v32H0z"></path>
        </g>
      </g>
    </svg>
  );
};

export const LiveDepartureIcon = ({ width = 33, height = 32, ...props }) => {
  return (
    <svg {...props} width={width} height={height} viewBox="0 0 33 32">
      <defs>
        <path
          id="2864c45b-6b1c-4c3d-9c10-cb0853ce9b97"
          d="M17.623 23.303h3.825v-1.31h-3.825v1.31zm0-3.1h3.825v-1.312h-3.825v1.312zm0 6.2h3.825v-1.312h-3.825v1.312zm-13.149-3.1h11.464v-1.31H4.474v1.31zm0 3.1h11.464v-1.312H4.474v1.312zm0-6.2h11.464v-1.312H4.474v1.312zm19.668-2.257v9.583c0 .62-.499 1.123-1.11 1.123H2.442c-.612 0-1.11-.504-1.11-1.123V16.55h16.154A6.747 6.747 0 0 1 15.7 9.334H.888a.894.894 0 0 0-.888.899v17.296C0 28.893 1.095 30 2.441 30h20.591c1.348 0 2.442-1.107 2.442-2.47V17.303c-.416.261-.86.476-1.332.642zm-5.25-6.317c0 1.734 1.419 3.138 3.166 3.138 1.75 0 3.166-1.403 3.166-3.138 0-1.733-1.42-3.138-3.166-3.138-1.747 0-3.166 1.405-3.166 3.138zm2.889-6.806l-.042.953c-.009.214.144.406.36.416 1.27.143 2.51.7 3.484 1.666a5.793 5.793 0 0 1 1.682 3.454c.03.212.204.364.42.354l.964-.04c.237-.012.399-.213.378-.458a7.52 7.52 0 0 0-2.192-4.548 7.603 7.603 0 0 0-4.646-2.176.416.416 0 0 0-.408.379zm.154-2.937l-.042.955a.405.405 0 0 0 .38.417 8.813 8.813 0 0 1 5.42 2.53 8.718 8.718 0 0 1 2.55 5.37.405.405 0 0 0 .422.377l.964-.04a.424.424 0 0 0 .37-.447 10.412 10.412 0 0 0-3.064-6.51A10.557 10.557 0 0 0 22.328 1.5a.397.397 0 0 0-.393.386z"
        ></path>
      </defs>
      <g fill="none" fillRule="evenodd" transform="translate(.947)">
        <mask id="b2864c45b-6b1c-4c3d-9c10-cb0853ce9b97" fill="currentColor">
          <use xlinkHref="#2864c45b-6b1c-4c3d-9c10-cb0853ce9b97"></use>
        </mask>
        <use
          fill="currentColor"
          fillRule="nonzero"
          xlinkHref="#2864c45b-6b1c-4c3d-9c10-cb0853ce9b97"
        ></use>
        <g
          fill="currentColor"
          mask="url(#b2864c45b-6b1c-4c3d-9c10-cb0853ce9b97)"
        >
          <path d="M0 0h32v32H0z"></path>
        </g>
      </g>
    </svg>
  );
};
export const ATHopIcon = ({ height = 32, width = 32, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      version="1.1"
      {...props}
    >
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Iconography"
          transform="translate(-97.000000, -1056.000000)"
          fill="currentColor"
        >
          <path
            d="M118.139471,1073.4783 C117.40353,1073.4783 116.805084,1074.07468 116.805084,1074.8133 C116.805084,1075.55035 117.40353,1076.14778 118.139471,1076.14778 C118.878046,1076.14778 119.475438,1075.55035 119.475438,1074.8133 C119.475438,1074.07468 118.878046,1073.4783 118.139471,1073.4783 L118.139471,1073.4783 Z M124.789806,1073.37873 L124.56697,1073.37873 L124.56697,1074.48087 L124.798762,1074.48087 C125.20914,1074.48087 125.654814,1074.41449 125.654814,1073.89977 C125.654814,1073.40454 125.174371,1073.37873 124.789806,1073.37873 L124.789806,1073.37873 Z M112.999473,1056 C104.162913,1056 97,1063.16286 97,1071.99947 C97,1080.83714 104.162913,1088 112.999473,1088 C121.83656,1088 129,1080.83714 129,1071.99947 C129,1063.16286 121.83656,1056 112.999473,1056 L112.999473,1056 Z M113.975635,1077.98907 L111.714606,1077.98907 L111.714606,1075.78373 L110.273805,1075.78373 L110.273805,1077.98907 L108.012775,1077.98907 L108.012775,1071.64491 L110.273805,1071.64491 L110.273805,1073.78229 L111.714606,1073.78229 L111.714606,1071.64491 L113.975635,1071.64491 L113.975635,1077.98907 Z M118.139471,1078.26724 C116.232451,1078.26724 114.68787,1076.72097 114.68787,1074.8133 C114.68787,1072.90616 116.232451,1071.36095 118.139471,1071.36095 C120.047017,1071.36095 121.592651,1072.90616 121.592651,1074.8133 C121.592651,1076.72097 120.047017,1078.26724 118.139471,1078.26724 L118.139471,1078.26724 Z M125.764915,1076.07929 L124.56697,1076.07929 L124.56697,1077.98907 L122.30594,1077.98907 L122.30594,1071.64491 L125.277624,1071.64491 C126.784275,1071.64491 127.898459,1072.40198 127.898459,1073.97458 C127.898459,1075.27112 127.07665,1076.07929 125.764915,1076.07929 L125.764915,1076.07929 Z"
            id="icon-hop"
          />
        </g>
      </g>
    </svg>
  );
};

const navLinkStyles = ({ isActive }: NavLinkStyleProps) =>
  tw([
    apply`flex flex-col gap-y-1 text-gray-500 items-center justify-center hover:bg-gray-100 rounded-md w-full py-2 `,
    { "text-blue-600": isActive },
  ]);

export const NavigationIcon = ({ Icon, children, to }: NavigationIconProps) => {
  return (
    <NavLink to={to} className={navLinkStyles}>
      {Icon}
      <p
        className={tw(
          ` font-bold`,
          css`
            font-size: 10px;
          `
        )}
      >
        {children}
      </p>
    </NavLink>
  );
};
