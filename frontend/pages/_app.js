import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/data";
import Header from "../components/header";

import color from "../utils/style";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>SAILPAN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.9.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Component {...pageProps} />
      </div>
      <style jsx global>
        {`
          @font-face {
            font-family: "Overpass";
            font-style: normal;
            font-weight: 400;
            src: local("Overpass Regular"), local("Overpass-Regular"),
              url("../fnt/overpass-v4-latin-regular.woff2") format("woff2"),
              url("../fnt/overpass-v4-latin-regular.woff") format("woff");
          }

          @font-face {
            font-family: "Overpass";
            font-style: italic;
            font-weight: 400;
            src: local("Overpass Italic"), local("Overpass-Italic"),
              url("../fnt/overpass-v4-latin-italic.woff2") format("woff2"),
              url("../fnt/overpass-v4-latin-italic.woff") format("woff");
          }

          @font-face {
            font-family: "Overpass";
            font-style: normal;
            font-weight: 600;
            src: local("Overpass SemiBold"), local("Overpass-SemiBold"),
              url("../fnt/overpass-v4-latin-600.woff2") format("woff2"),
              url("../fnt/overpass-v4-latin-600.woff") format("woff");
          }

          @font-face {
            font-family: "Racing Sans One";
            font-style: normal;
            font-weight: 400;
            src: local("Racing Sans One"), local("RacingSansOne-Regular"),
              url("../fnt/racing-sans-one-v7-latin-regular.woff2")
                format("woff2"),
              url("../fnt/racing-sans-one-v7-latin-regular.woff") format("woff");
          }

          html {
            overflow: hidden;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-size-adjust: 100%;
            overscroll-behavior: none;
            scroll-behavior: smooth;
          }

          body {
            overflow: hidden;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -moz-font-feature-settings: "liga" on;
            font: 400 16px/1.4 Overpass, sans-serif;
            background-color: ${color.cream};
            color: ${color.blue};
            letter-spacing: 0;
            margin: 0;
          }

          a {
            color: ${color.orange};
            text-decoration: none;
            border-bottom: 1px solid transparent;
          }

          a:hover {
            color: ${color.orange};
            border-bottom: 1px solid ${color.orange25};
          }

          a.primary {
            font-family: "Overpass";
            font-style: normal;
            font-weight: 600;
            font-size: 0.75rem;
            line-height: 1rem;
            border-radius: 1rem;
            height: 1rem;
            padding: 4px 8px;
            color: ${color.cream};
            background-color: ${color.orange};
            text-transform: uppercase;
            text-decoration: none;
            white-space: nowrap;
            opacity: 100%;
          }

          a.primary:hover {
            opacity: 90%;
          }

          a.primary:active {
            opacity: 100%;
          }

          h1 {
            font: 400 2.6em/0.8 "Racing Sans One", sans-serif;
            text-transform: uppercase;
          }

          h2 {
            font: 400 1.2em/0.8 "Racing Sans One", sans-serif;
            text-transform: uppercase;
          }

          h3 {
            font: 400 italic 1em/1.4 Overpass, sans-serif;
          }

          h4 {
            font: 400 0.9em/1.4 Overpass, sans-serif;
          }

          h5 {
            font: 300 1.3em/1.4 Overpass, sans-serif;
          }

          strong {
            font-weight: 600;
          }

          em {
            font-style: italic;
          }
        `}
      </style>
    </ApolloProvider>
  );
};

export default withData(App);
