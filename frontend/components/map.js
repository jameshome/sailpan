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
import { MapStateContext } from "../utils/mapstate";
import style from "../utils/style";

const Locations = () => {
  const [mapState, setMapState] = useContext(MapStateContext);

  return (
    <MapGL
      {...mapState}
      width="100%"
      height="100%"
      mapStyle={process.env.MAPBOX_STYLE_URL}
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
      <div className="scale">
        <ScaleControl unit="nautical" />
      </div>
      <div className="fullscreen">
        <FullscreenControl />
      </div>
      <div className="navigation">
        <NavigationControl />
      </div>
      <style jsx>{`
        .scale {
          position: absolute;
          top: 0;
          left: 0;
          padding: 10px;
          opacity: 0.75;
        }
        .fullscreen {
          position: absolute;
          top: 0;
          right: 0;
          padding: 10px;
          opacity: 0.5;
        }
        .navigation {
          position: absolute;
          top: 36px;
          right: 0;
          padding: 10px;
          opacity: 0.5;
        }
        @media screen and ${style.breakpoint.columns} {
          .scale {
            top: 24px;
          }
        }
      `}</style>
    </MapGL>
  );
};

export default Locations;
