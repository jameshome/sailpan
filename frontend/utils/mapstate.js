import React, { useState, useContext } from "react";
import { FlyToInterpolator } from "react-map-gl";

const MapStateContext = React.createContext();

const MapStateProvider = (props) => {
  const [state, setState] = useState({
    latitude: 24.75,
    longitude: -109.7,
    zoom: 5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 2000,
    transitionInterpolator: new FlyToInterpolator(),
  });
  return (
    <MapStateContext.Provider value={[state, setState]}>
      {props.children}
    </MapStateContext.Provider>
  );
};

export { MapStateProvider, MapStateContext };
