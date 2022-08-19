import { ReactNode } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { tw } from "twind";

export const NavigationBar = () => {
  return (
    <div
      className={tw`absolute w-full bottom-0 h-24 bg-white p-2 shadow-md flex flex-row justify-between items-center`}
    >
      <NavigationIcon Icon={HiOutlineLocationMarker} to="/planner">
        Journey Planner
      </NavigationIcon>
    </div>
  );
};

type NavigationIconProps = {
  Icon: React.FC;
  children: ReactNode;
  to: string;
};

export const NavigationIcon = ({ Icon, children, to }: NavigationIconProps) => {
  return (
    <NavLink
      to={to}
      className={tw`flex flex-col gap-y-2 items-center justify-center`}
    >
      <Icon />
      {children}
    </NavLink>
  );
};
