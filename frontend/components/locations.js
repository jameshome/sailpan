import React, { useContext } from "react";
import Link from "next/link";
import { FlyToInterpolator } from "react-map-gl";
import Moment from "react-moment";
import Pin from "../components/pin";
import style from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Locations = ({ report }) => {
  const [mapState, setMapState] = useContext(MapStateContext);

  return report.locations.map((location) => {
    return (
      <h4 key={`location__${report.id}-${location.id}`}>
        <Link
          href={{
            pathname: "/location/[id]",
            query: { return: "/#" + report.id },
          }}
          as={"/location/" + location.id}
        >
          <span>
            <span
              onClick={() => {
                setMapState({
                  ...mapState,
                  latitude: location.latitude,
                  longitude: location.longitude,
                  zoom: 9,
                  transitionDuration: 1000,
                  transitionInterpolator: new FlyToInterpolator(),
                });
              }}
            >
              <Pin color={style.color[location.status]} />
              <a>{location.name}</a>
            </span>
          </span>
        </Link>
        <style jsx>
          {`
            h4 {
              font: ${style.font.heading_2};
              margin: 0;
              display: inline-block;
              position: relative;
            }

            h4 a {
              margin: 0 12px 0 3px;
              cursor: pointer;
              vertical-align: top;
            }
          `}
        </style>
      </h4>
    );
  });
};

export default Locations;
