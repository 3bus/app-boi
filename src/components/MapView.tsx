import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { lineString, along, point, bearing } from "@turf/turf";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
  LayerProps,
  Source,
  Layer,
  MapRef,
} from "react-map-gl";
import { tw } from "twind";
import { useSearchTerm } from "../contexts/SearchContext";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const path = [
  [174.757624, -36.842256],
  [174.755545, -36.841725],
  [174.754174, -36.845132],
  [174.754214, -36.845144],
  [174.754174, -36.845132],
  [174.754106, -36.845354],
  [174.756802, -36.846045],
  [174.757281, -36.846031],
  [174.757848, -36.845922],
  [174.759522, -36.845648],
  [174.759522, -36.845648],
  [174.7595, -36.845581],
  [174.759522, -36.845648],
  [174.761099, -36.845384],
  [174.76153, -36.844983],
  [174.762013, -36.844663],
  [174.763274, -36.844125],
  [174.764025, -36.843904],
  [174.765132, -36.844175],
  [174.765163, -36.844125],
  [174.765132, -36.844175],
  [174.765392, -36.844256],
  [174.766635, -36.844649],
  [174.766995, -36.84473],
];

let animationId: number | undefined = undefined;
let animationSpeed = 3;
let animationSteps = 1900;

const useAudio = (url: string): [boolean, () => void] => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);
  const playyy = () => setPlaying(true);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, playyy];
};

export function MapView() {
  const navigate = useNavigate();
  const [_playing, play] = useAudio('/ka-ching.mp3');

  const mapRef = useRef<MapRef>(null);

  const onAnimate = useCallback(
    ({ longitude, latitude }: Record<string, number>) => {
      mapRef.current?.flyTo({ center: [longitude, latitude], duration: 0 });
    },
    []
  );

  const { searchTerm, setSearchTerm } = useSearchTerm();
  const [animationStep, setAnimationStep] = useState(0);
  if (animationStep >= animationSteps) {
    setAnimationStep(0);
    setSearchTerm("");
    if (animationId !== undefined) window.cancelAnimationFrame(animationId);
    navigate("/earn/1");
    play()
  }
  const animate = () => {
    animationStep < animationSteps &&
      setAnimationStep((t) => t + animationSpeed);
    animationId = window.requestAnimationFrame(animate);
  };

  useEffect(() => {
    return () => {
      if (animationId !== undefined) window.cancelAnimationFrame(animationId);
    };
  }, []);

  const travelSegments = useMemo(() => {
    const line = lineString(path);
    const segments: any = [];
    for (let i = 0; i < animationSteps; i += 1) {
      const segment = along(line, i, { units: "meters" });
      segments.push(segment.geometry.coordinates);
    }
    return segments;
  }, []);

  if (searchTerm && animationStep <= 1899) {
    onAnimate({
      longitude: travelSegments[animationStep][0],
      latitude: travelSegments[animationStep][1],
    });
  }

  const start =
    travelSegments[
      animationStep >= travelSegments.length ? animationStep - 1 : animationStep
    ];
  const end =
    travelSegments[
      animationStep >= travelSegments.length ? animationStep : animationStep + 1
    ];
  const rotationBearing =
    !start || !end ? 0 : bearing(point(start), point(end));
  const dataOne: GeoJSON.Feature<GeoJSON.Geometry> = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: path,
    },
  };
  return (
    <>
      <Map
        ref={mapRef}
        initialViewState={{
          latitude: -36.848031,
          longitude: 174.762193,
          zoom: 13.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        attributionControl={false}
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_ACCESS_TOKEN}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="bottom-right"
          showAccuracyCircle
        />

        {searchTerm && (
          <>
            <Source id="polylineLayer" type="geojson" data={dataOne}>
              <Layer
                id="lineLayer"
                type="line"
                source="my-data"
                layout={{
                  "line-join": "round",
                  "line-cap": "round",
                }}
                paint={{
                  "line-color": "rgba(3, 170, 238, 0.5)",
                  "line-width": 5,
                }}
              />
            </Source>
            <Source
              id="userBus"
              type="geojson"
              data={{
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: { bearing: rotationBearing - 45 },
                    geometry: {
                      type: "Point",
                      coordinates:
                        travelSegments[animationStep] ||
                        travelSegments[travelSegments.length - 1],
                    },
                  },
                ],
              }}
            >
              <Layer
                id="symbol"
                source="userBus"
                type="symbol"
                layout={{
                  "icon-image": "rocket-15",
                  "icon-size": 2,
                  "icon-rotate": ["get", "bearing"],
                  "icon-rotation-alignment": "map",
                  "icon-allow-overlap": true,
                  "icon-ignore-placement": true,
                }}
              />
            </Source>
            <div
              className={tw`absolute z-10 bottom-0 left-0 p-2 border border-gray-200 shadow-md border-solid w-full border-full`}
            >
              <div
                className={tw`w-full flex flex-col gap-y-4 bg-white rounded-xl p-4`}
              >
                <div className={tw`flex flex-row w-full justify-between`}>
                  <h3 className={tw`text-lg font-semibold`}>Your Journey</h3>
                  <IoMdClose
                    size={24}
                    onClick={() => {
                      setSearchTerm("");
                      setAnimationStep(0);
                      if (animationId) window.cancelAnimationFrame(animationId);
                    }}
                  />
                </div>
                {animationStep === 0 && (
                  <p className={tw`mb-2 mt-1`}>
                    Your journey to {searchTerm} will take 5 minutes. You will
                    earn 3 bussin points.
                  </p>
                )}
                <Button
                  className={`text-xs  ${
                    animationStep === 0 && "bg-blueGray-700 text-white"
                  }`}
                  onClick={
                    animationStep === 0
                      ? () => {
                          setAnimationStep(0);
                          animationId = window.requestAnimationFrame(animate);
                        }
                      : () => {
                          setSearchTerm("");
                          setAnimationStep(0);
                          if (animationId)
                            window.cancelAnimationFrame(animationId);
                        }
                  }
                >
                  {animationStep === 0 ? "Begin Journey" : "Cancel"}
                </Button>
              </div>
            </div>
          </>
        )}
      </Map>
    </>
  );
}
