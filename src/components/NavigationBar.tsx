import { forwardRef, ReactNode } from "react";
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineUser,
  HiOutlineCurrencyYen,
} from "react-icons/hi";
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
      <NavigationIcon Icon={HiOutlineLocationMarker} to="/planner">
        Journey Planner
      </NavigationIcon>

      <NavigationIcon Icon={HiOutlineCalendar} to="/departures">
        Live Depatures
      </NavigationIcon>
      <NavigationIcon Icon={HiOutlineCurrencyYen} to="/bussin">
        Buslty
      </NavigationIcon>
      <NavigationIcon Icon={HiOutlineUser} to="/account">
        My AT HOP
      </NavigationIcon>
    </div>
  );
});

type NavigationIconProps = {
  Icon: React.FC<{ size: number }>;
  children: ReactNode;
  to: string;
};

type NavLinkStyleProps = {
  isActive: boolean;
};

const navLinkStyles = ({ isActive }: NavLinkStyleProps) =>
  tw([
    apply`flex flex-col gap-y-1 text-gray-500 items-center justify-center hover:bg-gray-100 rounded-md w-full py-2 `,
    { "text-blue-600": isActive },
  ]);

export const NavigationIcon = ({ Icon, children, to }: NavigationIconProps) => {
  return (
    <NavLink to={to} className={navLinkStyles}>
      <Icon size={28} />
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
