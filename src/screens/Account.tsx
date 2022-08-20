import { tw } from "twind/css";
import { Layout } from "../components";
function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className={tw`p-6`}>{children}</div>;
}

interface ProfileSectionProps {
  pointCount: number
  rewardPoints: number
}
function ProfileSection(props: ProfileSectionProps) {
  return (
    <div className={tw`flex flex-col  p-6 bg-white	 rounded-lg items-center`}>
      <img src="https://minimaltoolkit.com/images/randomdata/male/49.jpg" className={tw`rounded-full w-24`}/>
      <div>[========--------------]</div>
      <div className={tw`font-semibold`}>{props.pointCount} Points</div>
      <div className={tw`text-sm opacity-60`}>You have {props.rewardPoints - props.pointCount} points to [reward]</div>
      <div className={tw`w-full	`}>Tier level</div>
    </div>
  );
}

export const Account = () => {
  const pointCount = 95
  const rewardPoints = 100
  return (
    <Layout hasSearch={false}>
      {/* TODO: better fix */}
      <div style={{ paddingTop: 56 }}></div>
      <SectionContainer>
        <ProfileSection pointCount={pointCount} rewardPoints={rewardPoints}/>
      </SectionContainer>
    </Layout>
  );
};
