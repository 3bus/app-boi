import { HiChevronDown, HiChevronRight, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { tw } from "twind";
import {
  BubbleCard,
  Layout,
  ProfileSection,
  SectionContainer,
} from "../components";

import { css } from "twind/css";
import { Meme } from '../components/memes';
import { useState } from 'react';


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

export const Account = () => {
  const navigate = useNavigate();
  const pointCount = 55;
  const rewardPoints = 100;
  const nextReward = "Silver level";
  return (
    <Layout hasSearch={false}>
      <SectionContainer>
        <ProfileSection
          pointCount={pointCount}
          rewardPoints={rewardPoints}
          nextReward={nextReward}
        />
      </SectionContainer>
      <SectionContainer>
        <p className={tw` text-lg pt-6 pb-2`}>Rewards</p>
        <BubbleCard
          text="Reserve a spot"
          onClick={() => {
            navigate("/reserve");
          }}
          className="mt-2"
          renderRightContent={() => <HiChevronRight size={24} />}
        />
        <BubbleCard
          text="Get Bussin"
          onClick={() => {
            navigate("/bussin");
          }}
          className="mt-2"
          renderRightContent={() => <HiChevronRight size={24} />}
        />
        <BubbleCard
          text="Earn points"
          onClick={() => {
            navigate("/earn");
          }}
          className="mt-2"
          renderRightContent={() => <HiChevronRight size={24} />}
        />
      </SectionContainer>
    </Layout>
  );
};
