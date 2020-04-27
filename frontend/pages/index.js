import Head from "next/head";
import Dynamic from "next/dynamic";
import Query from "../components/query";
import Header from "../components/header";
import Reports from "../components/reports";
import color from "../utils/style";

import REGION_QUERY from "../queries/region";
import REPORTS_QUERY from "../queries/reports";

const Map = Dynamic(() => import("../components/map"), {
  ssr: false,
});

const Home = () => {
  return (
    <Query query={REGION_QUERY} vars={{ id: 1 }}>
      {({ data: { region } }) => {
        return (
          <div>
            <Head>
              <title>SAILPAN — {region.name}</title>
            </Head>
            <header>
              <Header region={region} />
            </header>
            <main>
              <section>
                <Query query={REPORTS_QUERY}>
                  {({ data: { reports } }) => {
                    return <Reports reports={reports} />;
                  }}
                </Query>
              </section>
              <section className="map">
                <Map />
              </section>
            </main>

            <style jsx>{`
              div {
                height: 100vh;
                overflow: hidden;
                display: flex;
                flex-flow: column;
              }

              header {
                flex: 1;
              }

              main {
                display: flex;
                overflow: hidden;
                flex-flow: row no-wrap;
              }

              section {
                flex: 1;
                overflow-y: auto;
              }

              .map {
                background-color: ${color.blue08};
              }
            `}</style>
          </div>
        );
      }}
    </Query>
  );
};

export default Home;
