import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/data";
import Layout from "../components/layout";
import { MapStateProvider } from "../utils/mapstate";

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
