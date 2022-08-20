import { ReactNode } from "react";
import { apply, tw } from "twind";

type Props = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Button = ({ children, className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={tw([
        apply`py-2 px-4 border border-blueGray-700 bg-white text-blueGray-700 font-semibold rounded-lg`,
        className,
      ])}
    >
      {children}
    </button>
  );
};
