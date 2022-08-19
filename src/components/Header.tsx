import { tw } from "twind";
import { HiMenu } from "react-icons/hi";
import { FaBell } from "react-icons/Fa";

type Props = {
  pageName?: string;
  hasSearch?: boolean;
};

export const Header = ({ pageName, hasSearch = true }: Props) => {
  return (
    <div className={tw``}>
      <div
        className={tw`bg-blueGray-800 py-4 absolute top-0 text-white w-full flex flex-row justify-between items-center px-4`}
      >
        <HiMenu size={24} />
        <p className={tw`text-white font-semibold text-sm`}>
          {pageName || "My AT Hop"}
        </p>
        <FaBell size={18} />
      </div>
      {hasSearch && <div></div>}
    </div>
  );
};
