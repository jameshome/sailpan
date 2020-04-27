import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";

import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";

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

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 24.75,
      longitude: -109.7,
      zoom: 5,
    },
  };

  render() {
    return (
      <MapGL
        mapStyle="mapbox://styles/jameshome/ck9cf3tsd02al1imu0usk65qh"
        mapOptions={{ logoPosition: "bottom-left" }}
        mapboxApiAccessToken={process.env.MAPBOX_API_KEY}
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      >
        <div style={scaleStyle}>
          <ScaleControl unit="nautical" />
        </div>
        <div style={navigationStyle}>
          <NavigationControl />
        </div>
        <div style={fullscreenStyle}>
          <FullscreenControl />
        </div>
      </MapGL>
    );
  }
}
export default Map;
