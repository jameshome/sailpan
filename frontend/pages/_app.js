import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Layout from "../components/layout";
import { MapStateProvider } from "../utils/mapstate";
import { withApollo } from "../utils/apollo";

const App = ({ Component, pageProps }) => (
  <MapStateProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </MapStateProvider>
);

export default withApollo({ ssr: true })(App);
