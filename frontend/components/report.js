import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import color from "../utils/style";

const Report = ({ report }) => {
  console.log(report.category.replace(/_/g, ""));

  let articleBackground = {
    backgroundImage:
      "url(../img/icon-report-" + report.category.replace(/_/g, "") + ".png)",
  };

  return (
    <div>
      {report.date && <h2>{report.date}</h2>}

      <article style={articleBackground}>
        <time>
          <h4>
            <Moment format="HH:mm">{report.reported_at}</Moment> CT
          </h4>
        </time>
        <h4>{report.category.replace(/_/g, " ").toUpperCase()}</h4>
        <h5>
          {report.locations.map((location) => {
            return (
              <a href="" key={`${report.id}-${location.id}`}>
                {location.name}
              </a>
            );
          })}
        </h5>
        {report.conditions.map((condition) => {
          return (
            <strong key={`${report.id}-${condition.id}`}>
              {condition.name}.{" "}
            </strong>
          );
        })}
        <span>{report.brief}</span>{" "}
        {report.reporters.map((reporter) => {
          if (reporter.url) {
            return (
              <em key={`${reporter.id}-${reporter.id}`}>
                <a href={`${reporter.url}`} target="_blank">
                  {reporter.name}
                </a>
              </em>
            );
          } else {
            return (
              <em key={`${report.id}-${reporter.id}`}> {reporter.name}</em>
            );
          }
        })}
      </article>
      <style jsx>
        {`
          article {
            position: relative;
            font-size: 0.875rem;
            margin: 0 0 12px 0;
            padding-left: 48px;
            background: url(../img/icon-report-boatreport.png) top left / 36px
              no-repeat;
          }

          time {
            position: absolute;
            top: 0;
            right: 0;
          }

          h2 {
            margin: 0 0 6px 0;
            padding-top: 12px;
            border-top: 1px solid ${color.blue50};
            text-align: center;
          }

          h4 {
            margin: 0;
          }

          h5 {
            margin: 0;
          }

          h5 a {
            margin: 0 12px 0 0;
          }

          strong,
          span {
            color: ${color.black};
          }

          em:first-of-type::before {
            content: "— ";
          }

          em::after {
            content: ", ";
          }

          em:last-of-type::after {
            content: "";
          }

          em a {
            color: ${color.blue};
          }
        `}
      </style>
    </div>
  );
};
export default Report;
