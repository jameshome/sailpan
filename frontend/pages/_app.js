import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapStateProvider } from "../utils/mapstate";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/data";
import Layout from "../components/layout";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <MapStateProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MapStateProvider>
    </ApolloProvider>
  );
};
export default withData(App);
