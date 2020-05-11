import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import moment from "moment";
import Report from "../../components/report";
import Pin from "../../components/pin";
import Meta from "../../components/meta";
import Query from "../../components/query";
import LOCATION_QUERY from "../../queries/location";
import style from "../../utils/style";

const Location = () => {
  let previousDate;
  const router = useRouter();
  return (
    <Query query={LOCATION_QUERY} vars={{ id: router.query.id }}>
      {({ data: { location } }) => {
        let detailedStatus = (status) => {
          switch (status) {
            case "open":
              return "Business as usual or nearly so";
            case "limited":
              return "Some restrictions reported";
            case "closed":
              return "Major restrictions or closures reported";
            case "uncertain":
              return "Conflicting information reported";
            default:
              return "No information reported";
          }
        };

        let pageDescription =
          location.reports.length === 1
            ? "1 report"
            : location.reports.length + " reports";
        pageDescription =
          location.name +
          " is " +
          location.status +
          " (" +
          pageDescription +
          ")";

        let pageImage = "social-" + location.status + ".png";

        return (
          <>
            <Meta
              title={location.name}
              url={"https://sailpan.info/location/" + location.id}
              description={pageDescription}
              image={pageImage}
            />

            <div className="details">
              <Link href={router.query.return ? router.query.return : "/"}>
                <img
                  src="/img/icon-back.png"
                  width="36"
                  height="36"
                  alt="Back"
                />
              </Link>

              <h1>{location.name}</h1>
              <span className="type">{location.type}</span>

              {location.website && (
                <span className="website">
                  <a href={location.website} target="_blank">
                    Website
                  </a>
                </span>
              )}
            </div>
            <div className="status">
              <Pin color={style.color[location.status]} />
              <span
                style={{
                  color: style.color[location.status + "_text"],
                }}
              >
                <strong>{location.status}</strong>
                {detailedStatus(location.status)}
              </span>
            </div>
            {location.reports.map((report, i) => {
              let printDate;
              let date = report.reported_at.substr(0, 10);
              if (date !== previousDate) {
                report.date = moment(date).format("MMMM D, YYYY");
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
                  display: flex;
                  align-items: baseline;
                  margin: 36px 18px 0 0;
                }

                .status {
                  align-items: center;
                  margin: 0 18px 12px 60px;
                  font: ${style.font.body};
                }

                .status strong {
                  text-transform: capitalize;
                  font: ${style.font.heading_2};
                  padding-right: 6px;
                }

                h1 {
                  font: ${style.font.title};
                  margin: 6px 6px 6px 0;
                }

                span {
                  padding-left: 6px;
                }

                .type {
                  text-transform: uppercase;
                  font: ${style.font.label};
                }

                .website {
                  margin-right: 0;
                  margin-left: auto;
                  padding-left: 12px;
                }

                img {
                  align-self: center;
                  margin: 0 12px;
                  cursor: pointer;
                }

                p {
                  margin: 6px 18px 6px 60px;
                  font-size: ${style.font.body};
                }
              `}
            </style>
          </>
        );
      }}
    </Query>
  );
};

export default Location;
