import React from "react";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Meta from "../components/meta";
import Query from "../components/query";
import REGION_QUERY from "../queries/region";
import style from "../utils/style";

const Map = dynamic(() => import("../components/map"));
const Layout = ({ children }) => {
  return (
    <Query query={REGION_QUERY} vars={{ id: 1 }}>
      {({ data: { region } }) => {
        return (
          <div className="layout">
            <header>
              <Header region={region} />
            </header>
            <main>
              <section className="reports">
                <div>{children}</div>
              </section>
              <section className="map">
                <Map />
              </section>
            </main>
            <style jsx global>
              {`
                @font-face {
                  font-family: "Overpass";
                  font-style: normal;
                  font-weight: 400;
                  src: local("Overpass Regular"), local("Overpass-Regular"),
                    url("../fnt/overpass-v4-latin-regular.woff2")
                      format("woff2"),
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
                    url("../fnt/racing-sans-one-v7-latin-regular.woff")
                      format("woff");
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
                  background-color: ${style.color.cream};
                  color: ${style.color.blue};
                  letter-spacing: 0;
                  margin: 0;
                }

                a {
                  color: ${style.color.orange};
                  text-decoration: none;
                  border-bottom: 1px solid transparent;
                }

                a:hover {
                  color: ${style.color.orange};
                  border-bottom: 1px solid ${style.color.orange_25};
                }

                a.primary {
                  font-family: "Overpass";
                  font-style: normal;
                  font-weight: 600;
                  font-size: 0.875rem;
                  line-height: 1rem;
                  border-radius: 1rem;
                  padding: 6px 18px;
                  color: ${style.color.cream};
                  background-color: ${style.color.orange};
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

                b {
                  font-weight: 600;
                }

                .nowrap {
                  white-space: nowrap;
                }
              `}
            </style>
            <style jsx>{`
              .layout {
                height: 100vh;
                overflow-y: auto;
              }

              main {
                overflow-y: auto;
              }

              .reports div {
                margin: 36px 0 450px;
              }

              .map {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                height: 35vh;
                max-height: 425px;
                background-color: ${style.color.blue_08};
                box-shadow: ${style.elevation.up};
              }

              @media screen and ${style.breakpoint.columns} {
                .layout {
                  overflow: hidden;
                  display: flex;
                  flex-flow: column;
                }

                main {
                  display: flex;
                  flex: 1;
                  overflow: hidden;
                  flex-flow: row no-wrap;
                }

                section {
                  flex: 1;
                  overflow-y: auto;
                }

                .reports {
                  max-width: 550px;
                }

                .reports div {
                  margin: 36px 0 72px;
                }

                .map {
                  position: relative;
                  height: auto;
                  max-height: none;
                  box-shadow: 0;
                }
              }
            `}</style>
          </div>
        );
      }}
    </Query>
  );
};
export default Layout;
