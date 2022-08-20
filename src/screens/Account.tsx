import { tw } from "twind/css";
import { Layout } from "../components";

function ProfileSection() {
  return (
    <div className={tw`flex flex-col`}>
      <img src="https://minimaltoolkit.com/images/randomdata/male/49.jpg" />
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
      <ProfileSection />
    </Layout>
  );
};
