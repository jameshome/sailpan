import React from "react";
import Days from "../components/days";
import Query from "../components/query";

export default function Home() {
  return (
    <div>
      <Query query={DAYS_QUERY}>
        {({ data: { days } }) => {
          return <Days days={days} />;
        }}
      </Query>
      <img src="img/logotype.svg" />
      <style jsx>{`
        img {
          position: fixed;
          bottom: 0;
          width: 100%;
        }
      `}</style>
    </div>
  );
}
