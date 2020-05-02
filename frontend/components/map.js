import React, { useContext } from "react";
import MapGL, {
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  FlyToInterpolator,
} from "react-map-gl";
import Feature from "../components/feature";
import Query from "../components/query";
import LOCATIONS_QUERY from "../queries/locations";
import color from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Locations = () => {
  const [mapState, setMapState] = useContext(MapStateContext);

  const navigationStyle = {
    position: "absolute",
    top: 36,
    right: 0,
    padding: "10px",
    opacity: 0.5,
  };

  const fullscreenStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    padding: "10px",
    opacity: 0.5,
  };

  const scaleStyle = {
    position: "absolute",
    top: 24,
    left: 0,
    padding: "10px",
    opacity: 0.75,
  };

  return (
    <MapGL
      {...mapState}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/jameshome/ck9cf3tsd02al1imu0usk65qh"
      onViewportChange={(nextViewport) => setMapState(nextViewport)}
      mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
    >
      <Query query={LOCATIONS_QUERY}>
        {({ data: { locations } }) => {
          return locations.map((location, i) => {
            return <Feature location={location} key={`location__${i}`} />;
          });
        }}
      </Query>
      <div>
        <ScaleControl unit="nautical" />
      </div>
      <div style={fullscreenStyle}>
        <FullscreenControl />
      </div>
      <div style={navigationStyle}>
        <NavigationControl />
      </div>
    </MapGL>
  );
};

export default Locations;
