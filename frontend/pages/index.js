import React from "react";
import Query from "../components/query";
import Reports from "../components/reports";
import Meta from "../components/meta";

import REPORTS_QUERY from "../queries/reports";

const Home = () => {
  return (
    <>
      <Meta
        title="Pacific Mexico & Gulf of California"
        url="https://sailpan.info"
        description="Pandemic-related port & passage reports"
      />
      <Query query={REPORTS_QUERY}>
        {({ data: { reports } }) => {
          return <Reports reports={reports} />;
        }}
      </Query>
    </>
  );
};
export default Home;
