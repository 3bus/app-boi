import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { tw } from "twind";
import {
  BubbleCard,
  Layout,
  ProfileSection,
  SectionContainer,
} from "../components";

export const Account = () => {
  const navigate = useNavigate();
  const pointCount = 55;
  const rewardPoints = 100;
  const nextReward = "Silver level";
  return (
    <>
      <SectionContainer>
        <ProfileSection
          pointCount={pointCount}
          rewardPoints={rewardPoints}
          nextReward={nextReward}
        />
      </SectionContainer>
      <SectionContainer>
        <p className={tw` text-lg pb-2`}>Rewards</p>
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
        {Array(9)
          .fill(undefined)
          .map((_, index) => (
            <BubbleCard
              key={index}
              text={`Earn points ${index + 1}`}
              onClick={() => {
                navigate(`/earn/${index + 1}`);
              }}
              className="mt-2"
              renderRightContent={() => <HiChevronRight size={24} />}
            />
          ))}
      </SectionContainer>
    </>
  );
};
