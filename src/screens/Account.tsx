import { useState } from "react";
import { HiChevronDown, HiChevronRight, HiChevronUp } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { css, tw } from "twind/css";
import { BubbleCard, Layout } from "../components";
function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className={tw`p-6`}>{children}</div>;
}

interface ProfileAccountProps {
  pointCount: number;
  rewardPoints: number;
  nextReward: string;
}

function ProfileAccount(props: ProfileAccountProps) {
  const percentage = props.pointCount / props.rewardPoints;
  return (
    <div className={tw`flex flex-col bg-white rounded-xl items-center gap-2 w-full`}>
      <img
        src="https://minimaltoolkit.com/images/randomdata/male/49.jpg"
        className={tw`rounded-full w-24`}
      />
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
        <div className={tw`w-full text-sm	`}>Tier level</div>
        <div className={tw`text-gray-400`}>
          {!opened ? <HiChevronDown size={20} /> : <HiChevronUp size={20} />}
        </div>
      </div>
      {opened ? (
        <>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Bronze level</div>
            <div className={tw`w-full text-sm text-gray-400 text-right`}>
              550 Points
            </div>
          </div>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Silver level</div>
            <div className={tw`w-full text-sm text-gray-400 text-right`}>
              1100 Points
            </div>
          </div>
          <div className={tw`flex w-full items-center`}>
            <div className={tw`w-full text-sm text-gray-400`}>Gold level</div>
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
function ProfileSection(props: ProfileSectionProps) {
  const navigate = useNavigate();
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
      <BubbleCard
        text="Reserve a spot"
        onClick={() => {
          navigate("/reserve");
        }}
        className="mt-2"
        renderRightContent={() => <HiChevronRight size={24} />}
      />
    </div>
  );
}

export const Account = () => {
  const pointCount = 55;
  const rewardPoints = 100;
  const nextReward = "Silver level";
  return (
    <Layout hasSearch={false}>
      {/* TODO: better fix */}
      <div style={{ paddingTop: 56 }}></div>
      <SectionContainer>
        <ProfileSection
          pointCount={pointCount}
          rewardPoints={rewardPoints}
          nextReward={nextReward}
        />
      </SectionContainer>
    </Layout>
  );
};
