import React from "React";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import Report from "../../components/report";
import Query from "../../components/query";
import LOCATION_QUERY from "../../queries/location";
import color from "../../utils/style";

const Location = () => {
  let previousDate;
  const router = useRouter();
  return (
    <Query query={LOCATION_QUERY} vars={{ id: router.query.id }}>
      {({ data: { location } }) => {
        return (
          <div>
            <p>
              <Link href={router.query.return ? router.query.return : "/"}>
                <a>Back</a>
              </Link>
              <h1>{location.name}</h1>
            </p>
            {location.reports.map((report, i) => {
              let printDate;
              let date = report.reported_at.substr(0, 10);
              if (date !== previousDate) {
                report.date = moment(date).format("MMMM DD, YYYY");
              }
              previousDate = date;
              return (
                <Report
                  report={report}
                  key={`report__${report.id}`}
                  showLocation={false}
                />
              );
            })}
            <style jsx>
              {`
                div {
                  margin: 36px 0;
                }

                p {
                  margin: 6px 18px 6px 60px;
                  font-size: 0.875rem;
                }

                img {
                  display: block;
                  margin: 48px auto;
                }
              `}
            </style>
          </div>
        );
      }}
    </Query>
  );
};

export default Location;
