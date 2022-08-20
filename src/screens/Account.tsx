import { css, tw } from "twind/css";
import { Layout } from "../components";
function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className={tw`p-6`}>{children}</div>;
}

interface ProfileSectionProps {
  pointCount: number;
  rewardPoints: number;
  nextReward: string;
}

function ProfileSection(props: ProfileSectionProps) {
  const percentage = props.pointCount / props.rewardPoints;
  return (
    <div className={tw`flex flex-col p-6 bg-white rounded-lg items-center gap-2	`}>
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
        You have {props.rewardPoints - props.pointCount} points to {props.nextReward}
      </div>
      <div className={tw`w-full	`}>Tier level</div>
    </div>
  );
}

export const Account = () => {
  const pointCount = 55;
  const rewardPoints = 100;
  const nextReward = "Silver level"
  return (
    <Layout hasSearch={false}>
      {/* TODO: better fix */}
      <div style={{ paddingTop: 56 }}></div>
      <SectionContainer>
        <ProfileSection pointCount={pointCount} rewardPoints={rewardPoints} nextReward={nextReward} />
      </SectionContainer>
    </Layout>
  );
};
