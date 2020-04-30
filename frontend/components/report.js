import React from "react";
import Link from "next/link";
import Moment from "react-moment";
import Pin from "./pin";
import color from "../utils/style";

const Report = ({ report }) => {
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
        {report.locations.map((location) => {
          return (
            <h5 key={`location__${report.id}-${location.id}`}>
              <Pin color={color[location.status]} url="http://google.com" />
              <a href="">{location.name}</a>
            </h5>
          );
        })}
        <p>
          {report.conditions.map((condition) => {
            return (
              <strong key={`${report.id}-${condition.id}`}>
                {condition.name}.{" "}
              </strong>
            );
          })}
          <span>{report.brief}</span>
          <br />
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
        </p>
      </article>
      <style jsx>
        {`
          article {
            position: relative;
            font-size: 0.875rem;
            margin: 18px 18px 18px 0;
            padding-left: 60px;
            background: url(../img/icon-report-boatreport.png) 12px 0px / 36px
              no-repeat;
          }

          time {
            position: absolute;
            top: 0;
            right: 0;
          }

          p {
            margin: 0;
          }

          h2 {
            margin: 0;
            padding-top: 12px;
            border-top: 1px solid ${color.blue25};
            text-align: center;
          }

          h4 {
            margin: 0;
          }

          h5 {
            margin: 2px 0 0 0;
            display: inline-flex;
            flex-flow: row no-wrap;
            align-items: middle;
          }

          h5 a {
            margin: 0 12px 0 4px;
          }

          strong,
          span {
            color: ${color.black};
          }

          em::after {
            content: ", ";
          }

          em:last-child::after {
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
