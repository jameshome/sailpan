import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Query from "../components/query";
import Header from "../components/header";
import Reports from "../components/reports";
import Location from "../components/location";
import color from "../utils/style";
import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";

import REGION_QUERY from "../queries/region";
import REPORTS_QUERY from "../queries/reports";
import LOCATIONS_QUERY from "../queries/locations";

const Home = () => {
  const router = useRouter();

  const [viewport, setViewport] = useState({
    latitude: 24.75,
    longitude: -109.7,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });

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
    <Query query={REGION_QUERY} vars={{ id: 1 }}>
      {({ data: { region } }) => {
        return (
          <div>
            <Head>
              <title>SAILPAN — {region.name}</title>
            </Head>
            <header>
              <Header region={region} />
            </header>
            <main>
              <section>
                <Query query={REPORTS_QUERY}>
                  {({ data: { reports } }) => {
                    return <Reports reports={reports} />;
                  }}
                </Query>
              </section>
              <section className="map">
                <MapGL
                  {...viewport}
                  width="100%"
                  height="100%"
                  mapStyle="mapbox://styles/jameshome/ck9cf3tsd02al1imu0usk65qh"
                  onViewportChange={(nextViewport) => setViewport(nextViewport)}
                  mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
                >
                  <Query query={LOCATIONS_QUERY}>
                    {({ data: { locations } }) => {
                      return locations.map((location, i) => {
                        return (
                          <Location
                            location={location}
                            key={`location__${i}`}
                          />
                        );
                      });
                    }}
                  </Query>
                  <div style={scaleStyle}>
                    <ScaleControl unit="nautical" />
                  </div>
                  <div style={fullscreenStyle}>
                    <FullscreenControl />
                  </div>
                  <div style={navigationStyle}>
                    <NavigationControl />
                  </div>
                </MapGL>
              </section>
            </main>
            <style jsx>{`
              div {
                height: 100vh;
                overflow: hidden;
                display: flex;
                flex-flow: column;
              }

              header {
                flex: 1;
              }

              main {
                display: flex;
                overflow: hidden;
                flex-flow: row no-wrap;
              }

              section {
                flex: 1;
                overflow-y: auto;
              }

              .map {
                background-color: ${color.blue08};
              }
            `}</style>
          </div>
        );
      }}
    </Query>
  );
};

export default Home;
