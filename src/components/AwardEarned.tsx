import { Layout } from "./Layout";
import { FaCheck } from "react-icons/fa";
import { tw } from "twind";
import { useNavigate } from "react-router-dom";

function adjuster(num: number) {
  return (num / 428) * 390;
}

function getCircleColor(background: string) {
  var c = background.substring(1); // strip #
  var rgb = parseInt(c, 16); // convert rrggbb to decimal
  var r = (rgb >> 16) & 0xff; // extract red
  var g = (rgb >> 8) & 0xff; // extract green
  var b = (rgb >> 0) & 0xff; // extract blue

  var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  if (luma < 40) {
    // pick a different colour
    return "white";
  }
  return "black";
}
interface Props {
  topLeadCopy: string;
  circleLeadCopy: string;
  circleBottomCopy: string;
  description: string;
  containerColor: string;
  circleBackground: string;
  circleOutline: string;
}
export default function AwardEarned(props: Props) {
  const {
    topLeadCopy,
    circleLeadCopy,
    circleBottomCopy,
    description,
    containerColor,
    circleBackground,
    circleOutline,
  } = props;
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
          background: containerColor,
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
            {topLeadCopy}
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
            // background: "rgb(254, 255, 215)",
            background: circleOutline,
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
              // background: "#F9FFB3",
              background: circleBackground,
              borderRadius: "100%",
              width: adjuster(230),
              height: adjuster(230),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: getCircleColor(circleBackground),
            }}
          >
            <div style={{ textAlign: "center" }}>
              <span
                style={{
                  fontSize: circleLeadCopy.length > 3 ? adjuster(40) : adjuster(64),
                  lineHeight: adjuster(64) + "px",
                  fontWeight: "500",
                }}
              >
                {circleLeadCopy}
              </span>
              {/* <span
                style={{
                  fontSize: adjuster(40),
                  lineHeight: adjuster(64) + "px",
                  fontWeight: "500",
                }}
              >
                %
              </span> */}
            </div>
            <div style={{ fontSize: adjuster(24) }}>{circleBottomCopy}</div>
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
          {description}
        </div>

        <div
          style={{
            borderRadius: "100%",
            width: adjuster(205),
            height: adjuster(205),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "rgb(0 0 0 / 8%) -1px -1px 1em",
            position: "absolute",
            top: 100,
            right: -100,
          }}
        ></div>
        <div
          style={{
            borderRadius: "100%",
            width: adjuster(281),
            height: adjuster(281),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "rgb(0 0 0 / 8%) -1px -1px 1em",
            position: "absolute",
            bottom: 40,
            left: -100,
          }}
        ></div>
        <div
          style={{
            borderRadius: "100%",
            width: adjuster(185),
            height: adjuster(185),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "rgb(0 0 0 / 8%) -1px -1px 1em",
            position: "absolute",
            bottom: -40,
            right: -50,
          }}
        ></div>

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
