import { Layout } from "./Layout";
import { FaCheck } from "react-icons/fa";

function adjuster(num: number) {
  return (num / 428) * 390;
}

export default function AwardEarned() {
  return (
    <Layout hasSearch={false}>
      {/* <div>Award Earned</div>
      <div>C02 saved</div>
      <div>10kg</div>
      <div>You reduced your </div>
      <div>carbon emissions by 10kg! </div>
      <div>Back</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: 597,
          width: 597,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 10,
          backgroundColor: "rgb(50, 119, 102, 0.6)",
          marginLeft: "calc((597px - 390px) / -2)",
          marginTop: "calc(-590px + 150px)",
          borderBottomLeftRadius: "100%",
          borderBottomRightRadius: "100%",
        }}
      >
        <div style={{ fontSize: 24, paddingTop: 40, color: "white" }}>
          Great Job!
        </div>
        <div style={{ paddingBottom: 40 }}>
          <FaCheck
            className="text-green-500"
            size={(49 / 428) * 390}
            color="white"
          />
        </div>
      </div>
      <div
        style={{
          background: "rgb(254, 255, 215)",
          borderRadius: "100%",
          width: adjuster(295),
          height: adjuster(295),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#F9FFB3",
            borderRadius: "100%",
            width: adjuster(230),
            height: adjuster(230),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <span style={{ fontSize: adjuster(64), lineHeight: adjuster(64) + "px", fontWeight: '500' }}>20</span>
            <span style={{ fontSize: adjuster(40), lineHeight: adjuster(64) + "px", fontWeight: '500' }}>%</span>
          </div>
          <div style={{ fontSize: adjuster(24) }}>Discount</div>
        </div>
      </div>
      <div>You earned a 20% discount towards any AT HOP monthly pass</div>
      <div>Back</div>
    </Layout>
  );
}
