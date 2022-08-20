import { tw } from "twind/css";
import { Layout } from "../components";
function SectionContainer({ children }: { children: React.ReactNode }) {
  return <div className={tw`p-6`}>{children}</div>;
}
function ProfileSection() {
  return (
    <div className={tw`flex flex-col  p-6 bg-white	 rounded-lg items-center`}>
      <img src="https://minimaltoolkit.com/images/randomdata/male/49.jpg" className={tw`rounded-full w-36	`}/>
      XX Points
      <div>You have XX points to [reward]</div>
      <div>Tier level</div>
    </div>
  );
}

export const Account = () => {
  return (
    <Layout hasSearch={false}>
      {/* TODO: better fix */}
      <div style={{ paddingTop: 56 }}></div>
      <SectionContainer>
        <ProfileSection />
      </SectionContainer>
    </Layout>
  );
};
