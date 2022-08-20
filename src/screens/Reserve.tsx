import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { tw } from "twind";
import { BubbleCard, Layout, TextInput, Button } from "../components";

export const Reserve = () => {
  return (
    <Layout hasSearch={false}>
      <div className={tw` h-full`}>
        <div
          className={tw`bg-white p-4 text-gray-700 justify-center flex flex-row relative`}
        >
          <Link to="/rewards" className={tw`absolute left-3 top-3`}>
            <HiChevronLeft size={32} />
          </Link>
          <p className={tw` font-semibold`}>Request a spot</p>
        </div>
        <div className={tw`px-4 py-6 overflow-scroll h-full`}>
          <p className={tw` text-lg pb-2`}>Find your route</p>
          <TextInput className="w-full" />
          <p className={tw` text-lg pt-6 pb-2`}>Recents</p>
          <div className={tw`flex flex-col gap-y-4`}>
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
            <BubbleCard
              text="Auckland Muesum"
              subtext="Bayview > Ponsonby"
              renderRightContent={() => (
                <Button className="text-xs">Reserve</Button>
              )}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
