import { useState } from 'react';
import { tw } from "twind/css";
import Particles from "react-tsparticles";
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine';

export const Meme = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const [show, setShow] = useState(false)

  return (
    <div>
      <img
        alt=""
        src="https://minimaltoolkit.com/images/randomdata/male/49.jpg"
        className={tw`rounded-full w-24`}
        onMouseOver={() => setShow(true)}
        onMouseEnter={() => setShow(true)}
        onMouseOut={() => setShow(false)}
      />
      {
        show ? <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            "fullScreen": {
              "zIndex": 1
            },
            "particles": {
              "color": {
                "value": [
                  "#FFFFFF",
                  "#FFd700"
                ]
              },
              "move": {
                "direction": "bottom",
                "enable": true,
                "outModes": {
                  "default": "out"
                },
                "size": true,
                "speed": {
                  "min": 1,
                  "max": 3
                }
              },
              "number": {
                "value": 500,
                "density": {
                  "enable": true,
                  "area": 800
                }
              },
              "opacity": {
                "value": 1,
                "animation": {
                  "enable": false,
                  "startValue": "max",
                  "destroy": "min",
                  "speed": 0.3,
                  "sync": true
                }
              },
              "rotate": {
                "value": {
                  "min": 0,
                  "max": 360
                },
                "direction": "random",
                "animation": {
                  "enable": true,
                  "speed": 60
                }
              },
              "tilt": {
                "direction": "random",
                "enable": true,
                "move": true,
                "value": {
                  "min": 0,
                  "max": 360
                },
                "animation": {
                  "enable": true,
                  "speed": 60
                }
              },
              "shape": {
                "type": [
                  "circle",
                  "square"
                ],
                "options": {}
              },
              "size": {
                "value": {
                  "min": 2,
                  "max": 4
                }
              },
              "roll": {
                "darken": {
                  "enable": true,
                  "value": 30
                },
                "enlighten": {
                  "enable": true,
                  "value": 30
                },
                "enable": true,
                "speed": {
                  "min": 15,
                  "max": 25
                }
              },
              "wobble": {
                "distance": 30,
                "enable": true,
                "move": true,
                "speed": {
                  "min": -15,
                  "max": 15
                }
              }
            }
          }}
        /> : null
      }
    </div>
  );
};