import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { tw } from "twind";
import { css } from "twind/css";
import { Meme } from "./memes";

interface ProfileAccountProps {
  pointCount: number;
  rewardPoints: number;
  nextReward: string;
}

function ProfileAccount(props: ProfileAccountProps) {
  const percentage = props.pointCount / props.rewardPoints;
  return (
    <div
      className={tw`flex flex-col bg-white rounded-xl items-center gap-2 w-full`}
    >
      <Meme />
      <div
        className={tw(
          `h-4 rounded-full bg-gray-300`,
          css`
            width: calc(390px * 0.6);
          `
        )}
      >
        <div
          className={tw(
            `h-4 rounded-full bg-blueGray-700`,
            css`
              width: calc(390px * 0.6 * ${percentage});
            `
          )}
        ></div>
      </div>
      <div className={tw`font-semibold`}>{props.pointCount} Points</div>
      <div className={tw`text-sm opacity-60`}>
        You have {props.rewardPoints - props.pointCount} points to{" "}
        {props.nextReward}
      </div>
    </div>
  );
}

function ProfileTiers(props: {}) {
  const [opened, setOpened] = useState(false);
  return (
    <div className={tw`flex flex-col w-full gap-2`}>
      <div
        className={tw`flex w-full items-center cursor-pointer select-none`}
        onClick={() => setOpened(!opened)}
      >
        <div className={tw`w-full text-sm	font-semibold `}>Tier level info</div>
        <div className={tw`text-gray-400`}>
          {!opened ? <HiChevronDown size={20} /> : <HiChevronUp size={20} />}
        </div>
      </div>
      {opened ? (
        <>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm font-semibold	`}>Levels</div>
            <div className={tw`w-full text-sm font-semibold	`}>
              Fare Discount
            </div>
            <div className={tw`w-full text-sm font-semibold	 text-right`}>
              Points
            </div>
          </div>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Bronze level</div>
            <div className={tw`w-full text-sm text-gray-400`}>10%</div>
            <div className={tw`w-full text-sm text-gray-400 text-right`}>
              550 Points
            </div>
          </div>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Silver level</div>
            <div className={tw`w-full text-sm text-gray-400`}>20%</div>
            <div className={tw`w-full text-sm text-gray-400 text-right`}>
              1100 Points
            </div>
          </div>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Gold level</div>
            <div className={tw`w-full text-sm text-gray-400`}>30%</div>
            <div className={tw`w-full text-sm text-gray-400 text-right`}>
              2000 Points
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

interface ProfileSectionProps {
  pointCount: number;
  rewardPoints: number;
  nextReward: string;
}
export function ProfileSection(props: ProfileSectionProps) {
  return (
    <div>
      <div
        className={tw`flex flex-col px-4 py-6 bg-white rounded-xl items-center gap-4`}
      >
        <ProfileAccount
          pointCount={props.pointCount}
          rewardPoints={props.rewardPoints}
          nextReward={props.nextReward}
        />
        <ProfileTiers />
      </div>
    </div>
  );
}
