import React from "react";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../utils/data";
import color from "../utils/style";

const App = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <Head>
        <title>SAILPAN</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
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
              url("../fonts/overpass-v4-latin-regular.woff2") format("woff2"),
              url("../fonts/overpass-v4-latin-regular.woff") format("woff");
          }

          @font-face {
            font-family: "Overpass";
            font-style: italic;
            font-weight: 400;
            src: local("Overpass Italic"), local("Overpass-Italic"),
              url("../fonts/overpass-v4-latin-italic.woff2") format("woff2"),
              url("../fonts/overpass-v4-latin-italic.woff") format("woff");
          }

          @font-face {
            font-family: "Overpass";
            font-style: normal;
            font-weight: 600;
            src: local("Overpass SemiBold"), local("Overpass-SemiBold"),
              url("../fonts/overpass-v4-latin-600.woff2") format("woff2"),
              url("../fonts/overpass-v4-latin-600.woff") format("woff");
          }

          @font-face {
            font-family: "Racing Sans One";
            font-style: normal;
            font-weight: 400;
            src: local("Racing Sans One"), local("RacingSansOne-Regular"),
              url("../fonts/racing-sans-one-v7-latin-regular.woff2")
                format("woff2"),
              url("../fonts/racing-sans-one-v7-latin-regular.woff")
                format("woff");
          }

          html {
            overflow-x: hidden;
            overflow-y: scroll;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-text-size-adjust: 100%;
            overscroll-behavior: none;
            scroll-behavior: smooth;
          }

          body {
            overflow-x: hidden;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -moz-font-feature-settings: "liga" on;
            font: 400 16px/21px Overpass, sans-serif;
            background-color: ${color.cream};
            color: ${color.blue};
            letter-spacing: 0;
            margin: 0;
          }

          a {
            color: ${color.orange};
            font-weight: 600;
            text-decoration: none;
            border-bottom: 1px solid transparent;
          }

          a:hover {
            color: ${color.orange};
            border-bottom: 1px solid ${color.orange25};
          }

          a.primary {
            font-family: "Racing Sans One";
            font-style: normal;
            font-weight: 400;
            font-size: 1rem;
            line-height: 1rem;
            border-radius: 1rem;
            height: 1rem;
            padding: 0 12px;
            color: ${color.cream};
            background-color: ${color.orange};
            text-transform: uppercase;
            text-decoration: none;
            opacity: 90%;
          }

          a.primary:hover {
            opacity: 100%;
          }

          strong {
            font-weight: 600;
          }
        `}
      </style>
    </ApolloProvider>
  );
};

export default withData(App);
