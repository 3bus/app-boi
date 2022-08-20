import { tw } from "twind";
import { HiMenu } from "react-icons/hi";
import { AddressSearch } from "./AddressSearch";
import { IoIosBicycle } from 'react-icons/io';
import { BsConeStriped } from 'react-icons/bs';
import { FaBell, FaHome, FaBus, FaCar } from "react-icons/Fa";
import { VscClose } from 'react-icons/vsc';

import './menu.css';

type Props = {
  pageName?: string;
  hasSearch?: boolean;
  openNav: boolean;
  setOpenNav: (state: boolean) => void;
};

export const Header = ({ pageName, hasSearch = true, openNav, setOpenNav }: Props) => {

  if (openNav) {
    return <div className={`flex flex-col gap-y-4 p-4 bg-blueGray-800 w-full fade-in `} onClick={() => setOpenNav(false)}>
      <div className='box fade-in show'>
        <div className=''>
          <div onClick={() => setOpenNav(!openNav)} className={`flex flex-row items-center gap-y-4 p-4`}>
            <VscClose />
            Close
          </div>
          <hr />
          <div className="flex">
            <a className={`flex flex-row items-center gap-y-4 p-4`} href="/">
              <FaHome className='py-2'/>
              Home
            </a>
          </div>
          <div className="flex">
            <a className={`flex flex-row items-center gap-y-4 p-4`} href="/">
              <FaBus />
              Bus
            </a>
          </div>
          <div className="flex">
            <a className={`flex flex-row items-center gap-y-4 p-4`} href="/">
              <IoIosBicycle />
              Cycle
            </a>
          </div>
          <div className="flex">
            <a className={`flex flex-row items-center gap-y-4 p-4`} href="/">
              <FaCar />
              Drive
            </a>
          </div>
          <div className="flex">
            <a className={`flex flex-row items-center gap-y-4 p-4`} href="/">
              <BsConeStriped />
              Road works
            </a>
          </div>

        </div >
      </div>
      <div
        className={tw`text-white flex flex-row justify-between items-center`}
      >
        <HiMenu size={24} onClick={() => setOpenNav(!openNav)} />
        <p className={tw`text-white font-semibold text-sm`}>
          {pageName || "My AT Hop"}
        </p>
        <FaBell size={18} />
      </div>
    </div>;
  }

  return (
    <div className={tw`flex flex-col gap-y-4 p-4 bg-blueGray-800 w-full fade-in`}>
      <div
        className={tw`  text-white flex flex-row justify-between items-center`}
      >
        <HiMenu size={24} onClick={() => setOpenNav(!openNav)} />
        <p className={tw`text-white font-semibold text-sm`}>
          {pageName || "My AT Hop"}
        </p>
        <FaBell size={18} />
      </div>
      {hasSearch && <AddressSearch onSelect={ console.log }/>}
    </div>
  );
};

