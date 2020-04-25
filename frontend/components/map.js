import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100%",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 13,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/jameshome/ck9cf3tsd02al1imu0usk65qh"
        mapboxApiAccessToken="pk.eyJ1IjoiamFtZXNob21lIiwiYSI6ImNrOTY2MWNwOTBlcWkzZW1nb3hjM2s3Z2IifQ.uLWAYFABCynG5ONB0zzehw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}
export default Map;
