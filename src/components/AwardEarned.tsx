import { Layout } from "./Layout";
import { FaCheck } from "react-icons/fa";
import { tw } from "twind";
import { useNavigate } from "react-router-dom";

function adjuster(num: number) {
  return (num / 428) * 390;
}

export default function AwardEarned() {
  const navigate = useNavigate();
  return (
    <Layout hasSearch={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          height: "100%",
          paddingLeft: adjuster(20),
          paddingRight: adjuster(20),
          background: "#FBFFD3",
        }}
      >
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
            marginTop: "calc(-590px + 130px)",
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
          }}
        >
          <div
            style={{ fontSize: adjuster(24), paddingTop: 40, color: "white" }}
          >
            Great Job!
          </div>
          <div style={{ paddingBottom: 40 }}>
            <FaCheck
              className="text-green-500"
              size={adjuster(49)}
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
            boxShadow: "rgb(0 0 0 / 8%) -1px -1px 1em",
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
              <span
                style={{
                  fontSize: adjuster(64),
                  lineHeight: adjuster(64) + "px",
                  fontWeight: "500",
                }}
              >
                20
              </span>
              <span
                style={{
                  fontSize: adjuster(40),
                  lineHeight: adjuster(64) + "px",
                  fontWeight: "500",
                }}
              >
                %
              </span>
            </div>
            <div style={{ fontSize: adjuster(24) }}>Discount</div>
          </div>
        </div>
        <div
          style={{
            fontSize: adjuster(24),
            paddingLeft: adjuster(68),
            paddingRight: adjuster(68),
            textAlign: "center",
          }}
        >
          You earned a 20% discount&nbsp;towards any AT&nbsp;HOP monthly pass
        </div>
        <button
          className={tw`px-4 py-3 text-sm text-white rounded-lg shadow-sm w-full`}
          style={{ backgroundColor: "#2B374D" }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </Layout>
  );
}
