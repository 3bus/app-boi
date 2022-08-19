import { tw } from "twind";

export const NavigationBar = () => {
  return (
    <div
      className={tw`absolute w-full bottom-0 h-24 bg-white p-2 shadow-md flex flex-row justify-between items-center`}
    ></div>
  );
};
