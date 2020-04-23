import Head from "next/head";
import Query from "../components/query";
import Header from "../components/header";
import Reports from "../components/reports";

import REGION_QUERY from "../queries/region";
import REPORTS_QUERY from "../queries/reports";

const Home = () => {
  return (
    <Query query={REGION_QUERY} vars={{ id: 1 }}>
      {({ data: { region } }) => {
        return (
          <div className="container">
            <Head>
              <title>SAILPAN — {region.name}</title>
            </Head>

            <main>
              <Header regionName={region.name} />

              <Query query={REPORTS_QUERY}>
                {({ data: { reports } }) => {
                  return <Reports reports={reports} />;
                }}
              </Query>
            </main>

            <style jsx>{``}</style>
          </div>
        );
      }}
    </Query>
  );
};

export default Home;
