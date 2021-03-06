import React, { useContext } from "react";
import Link from "next/link";
import { FlyToInterpolator } from "react-map-gl";
import { Marker } from "react-map-gl";
import Pin from "../components/pin";
import style from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Feature = ({ location }) => {
  const [mapState, setMapState] = useContext(MapStateContext);

  return (
    <Marker
      id={location.id}
      latitude={location.latitude}
      longitude={location.longitude}
    >
      <Link href="/location/[id]" as={"/location/" + location.id}>
        <span>
          <span
            onClick={() => {
              setMapState({
                ...mapState,
                latitude: location.latitude,
                longitude: location.longitude,
                zoom: 11,
                transitionDuration: 1500,
                transitionInterpolator: new FlyToInterpolator(),
              });
            }}
          >
            <Pin color={style.color[location.status]} />
          </span>
        </span>
      </Link>
    </Marker>
  );
};
export default React.memo(Feature);
