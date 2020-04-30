import React from "react";
import { Marker } from "react-map-gl";
import Pin from "./pin";
import color from "../utils/style";

const Feature = ({ location }) => {
  return (
    <Marker
      id={location.id}
      longitude={location.longitude}
      latitude={location.latitude}
    >
      <Pin color={color[location.status]} url="http://google.com" />
    </Marker>
  );
};
export default Feature;
