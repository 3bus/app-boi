import { FaCheck } from "react-icons/fa";
import { tw } from "twind";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

function adjuster(num: number) {
  return (num / 428) * 390;
}

function getCircleColor(background: string) {
  const c = background.substring(1); // strip #
  const rgb = parseInt(c, 16); // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff; // extract red
  const g = (rgb >> 8) & 0xff; // extract green
  const b = (rgb >> 0) & 0xff; // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

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

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            zIndex: 1,
          },
          particles: {
            color: {
              value: ["#FFFFFF", "#FFd700"],
            },
            move: {
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out",
              },
              size: true,
              speed: {
                min: 1,
                max: 3,
              },
            },
            number: {
              value: 500,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 1,
              animation: {
                enable: false,
                startValue: "max",
                destroy: "min",
                speed: 0.3,
                sync: true,
              },
            },
            rotate: {
              value: {
                min: 0,
                max: 360,
              },
              direction: "random",
              animation: {
                enable: true,
                speed: 60,
              },
            },
            tilt: {
              direction: "random",
              enable: true,
              move: true,
              value: {
                min: 0,
                max: 360,
              },
              animation: {
                enable: true,
                speed: 60,
              },
            },
            shape: {
              type: ["circle", "square"],
              options: {},
            },
            size: {
              value: {
                min: 2,
                max: 4,
              },
            },
            roll: {
              darken: {
                enable: true,
                value: 30,
              },
              enlighten: {
                enable: true,
                value: 30,
              },
              enable: true,
              speed: {
                min: 15,
                max: 25,
              },
            },
            wobble: {
              distance: 30,
              enable: true,
              move: true,
              speed: {
                min: -15,
                max: 15,
              },
            },
          },
        }}
      />
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
          overflowX: "hidden",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: 597,
            minWidth: 597,
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
            background: circleOutline,
            borderRadius: "100%",
            minWidth: adjuster(295),
            minHeight: adjuster(295),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "rgb(0 0 0 / 8%) -1px -1px 1em",
          }}
        >
          <div
            style={{
              background: circleBackground,
              borderRadius: "100%",
              minWidth: adjuster(230),
              minHeight: adjuster(230),
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
                  fontSize:
                    circleLeadCopy.length > 3 ? adjuster(40) : adjuster(64),
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
            minWidth: adjuster(205),
            minHeight: adjuster(205),
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
            minWidth: adjuster(281),
            minHeight: adjuster(281),
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
            minWidth: adjuster(185),
            minHeight: adjuster(185),
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
            navigate("/planner");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
