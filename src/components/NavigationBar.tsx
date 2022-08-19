import { ReactNode } from "react";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUser,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { tw } from "twind";
import { css } from "twind/css";

export const NavigationBar = () => {
  return (
    <div
      className={tw`absolute w-full bottom-0 bg-white px-2 pt-2 pb-10 shadow-md flex flex-row justify-between items-center`}
    >
      <NavigationIcon Icon={HiOutlineLocationMarker} to="/planner">
        Journey Planner
      </NavigationIcon>

      <NavigationIcon Icon={HiOutlineCalendar} to="/departures">
        Live Depatures
      </NavigationIcon>
      <NavigationIcon Icon={HiOutlineUser} to="/account">
        My AT HOP
      </NavigationIcon>
    </div>
  );
};

type NavigationIconProps = {
  Icon: React.FC<{ size: number }>;
  children: ReactNode;
  to: string;
};

export const NavigationIcon = ({ Icon, children, to }: NavigationIconProps) => {
  return (
    <NavLink
      to={to}
      className={tw`flex flex-col gap-y-1 items-center justify-center hover:bg-gray-100 rounded-md w-full py-2 `}
    >
      <Icon size={28} />
      <p
        className={tw(
          ` font-bold text-gray-500`,
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
