import { useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { tw } from "twind";
import { BubbleCard, Layout, TextInput, Button } from "../components";
import { DestinationPicker } from "../components/DestinationPicker";

enum Stage {
  PICK_DESTINATION,
  PICK_DATE,
  PICK_TIME,
  CONFIRM,
}

export const Reserve = () => {
  const [stage, setStage] = useState(Stage.PICK_DESTINATION);

  const renderContent = (stage: Stage) => {
    switch (stage) {
      case Stage.PICK_DESTINATION:
        return (
          <div>
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
                onClick={() => {
                  setStage(Stage.PICK_DATE);
                }}
              />
              <BubbleCard
                text="Auckland Muesum"
                subtext="Bayview > Ponsonby"
                renderRightContent={() => (
                  <Button className="text-xs">Reserve</Button>
                )}
                onClick={() => {
                  setStage(Stage.PICK_DATE);
                }}
              />
              <BubbleCard
                text="Auckland Muesum"
                subtext="Bayview > Ponsonby"
                renderRightContent={() => (
                  <Button className="text-xs">Reserve</Button>
                )}
                onClick={() => {
                  setStage(Stage.PICK_DATE);
                }}
              />
              <BubbleCard
                text="Auckland Muesum"
                subtext="Bayview > Ponsonby"
                renderRightContent={() => (
                  <Button className="text-xs">Reserve</Button>
                )}
                onClick={() => {
                  setStage(Stage.PICK_DATE);
                }}
              />
            </div>
          </div>
        );
      case Stage.PICK_DATE:
        return (
          <div>
            <DestinationPicker />
          </div>
        );
    }
  };

  return (
    <>
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
          {renderContent(stage)}
        </div>
      </div>
    </>
  );
};
