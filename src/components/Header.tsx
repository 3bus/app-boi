import { tw } from "twind";
import { HiMenu } from "react-icons/hi";
import { FaBell } from "react-icons/Fa";
import { TextInput } from "../components";

type Props = {
  pageName?: string;
  hasSearch?: boolean;
};

export const Header = ({ pageName, hasSearch = true }: Props) => {
  return (
    <div
      className={tw`flex flex-col gap-y-4 p-4 bg-blueGray-800 w-full absolute top-0 `}
    >
      <div
        className={tw`  text-white flex flex-row justify-between items-center`}
      >
        <HiMenu size={24} />
        <p className={tw`text-white font-semibold text-sm`}>
          {pageName || "My AT Hop"}
        </p>
        <FaBell size={18} />
      </div>
      {hasSearch && <TextInput />}
    </div>
  );
};