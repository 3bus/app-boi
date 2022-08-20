import { useEffect, useMemo, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
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
} from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiaWxpYS10dXJub3V0IiwiYSI6ImNsNzExdnF2NzBrNmkzdm1xYW5zdjBsdzIifQ.t8cMmqUo6Mv2dBTySkkOWg";

export function MapView() {
  // const [lat, setLat] = useState<number | null>(null);
  // const [lon, setLon] = useState<number | null>(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });
  // }, []);

  const MARKER_SIZE = 32;

  return (
    <>
      <Map
        initialViewState={{
          latitude: -36.848031,
          longitude: 174.762193,
          zoom: 13.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        attributionControl={false}
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          position="bottom-right"
          showAccuracyCircle
        />
        {/* {lon !== null && lat !== null && (
          <Marker
            key={`marker-user`}
            longitude={lon}
            latitude={lat}
            pitchAlignment="map"
          >
            <HiOutlineLocationMarker size={MARKER_SIZE} />
          </Marker>
        )} */}
      </Map>
    </>
  );
}
