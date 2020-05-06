import React from "react";
import Query from "../components/query";
import Reports from "../components/reports";

import REPORTS_QUERY from "../queries/reports";

const Home = () => {
  return (
    <Query query={REPORTS_QUERY}>
      {({ data: { reports } }) => {
        return <Reports reports={reports} />;
      }}
    </Query>
  );
};
export default Home;
