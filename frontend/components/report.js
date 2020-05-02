import React, { useContext } from "react";
import Link from "next/link";
import { FlyToInterpolator } from "react-map-gl";
import Moment from "react-moment";
import Pin from "../components/pin";
import Locations from "../components/locations";
import color from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Report = ({ report, showLocation }) => {
  let articleBackground = {
    backgroundImage:
      "url(../img/icon-report-" + report.category.replace(/_/g, "") + ".png)",
  };

  return (
    <div id={report.id}>
      {report.date && <h2>{report.date}</h2>}
      <article style={articleBackground}>
        <time>
          <h4>
            <Moment format="HH:mm">{report.reported_at}</Moment> CT
          </h4>
        </time>
        <h4>{report.category.replace(/_/g, " ").toUpperCase()}</h4>

        {showLocation && (
          <Locations report={report} key={`locations__${report.id}`} />
        )}

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
            color: ${color.black};
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

          em {
            color: ${color.blue};
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
