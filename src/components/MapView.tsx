import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiaWxpYS10dXJub3V0IiwiYSI6ImNsNzExdnF2NzBrNmkzdm1xYW5zdjBsdzIifQ.t8cMmqUo6Mv2dBTySkkOWg";

export function MapView() {
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
        style={{
          position: "initial",
        }}
      >
        <GeolocateControl position="bottom-right" />
      </Map>
    </>
  );
}
