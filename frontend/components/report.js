import React from "react";
import Moment from "react-moment";
import Pin from "../components/pin";
import Locations from "../components/locations";
import style from "../utils/style";

const Report = ({ report, showLocation }) => {
  return (
    <div id={report.id}>
      {report.date && <h2>{report.date}</h2>}
      <article
        style={{
          backgroundImage:
            "url(../img/icon-report-" +
            report.category.replace(/_/g, "") +
            ".png)",
        }}
      >
        <time>
          <Moment format="HH:mm [CT]">{report.reported_at}</Moment>
        </time>

        <p>{report.category.replace(/_/g, " ").toUpperCase()}</p>

        {showLocation && (
          <Locations report={report} key={`locations__${report.id}`} />
        )}

        {report.conditions && (
          <p className="conditions">
            {report.conditions.map((condition) => {
              return (
                <span key={`${report.id}-${condition.id}`}>
                  {condition.name}
                </span>
              );
            })}
          </p>
        )}
        <p className="brief">{report.brief}</p>

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
            font: ${style.font.body};
            margin: 18px 18px 18px 0;
            padding-left: 60px;
            background: url(../img/icon-report-boatreport.png) 12px 0px / 36px
              no-repeat;
          }

          time {
            position: absolute;
            top: 0;
            right: 0;
            color: ${style.color.blue_50};
          }

          p {
            margin: 3px 0;
          }

          .brief {
            color: ${style.color.black};
          }

          .conditions {
            margin-left: -6px;
          }

          .conditions span {
            display: inline-block;
            color: ${style.color.blue};
            background-color: ${style.color.blue_08};
            padding: 2px 6px;
            border-radius: 12px;
            white-space: nowrap;
            margin-right: 4px;
          }

          h2 {
            margin: 0;
            padding-top: 12px;
            border-top: 1px solid ${style.color.blue_25};
            text-align: center;
            font: ${style.font.heading_1};
            text-transform: uppercase;
          }

          h4 {
            margin: 0;
          }

          em {
            color: ${style.color.blue};
            margin: 4px 0;
          }

          em::after {
            content: ", ";
          }

          em:last-child::after {
            content: " ";
          }

          em a {
            color: ${style.color.blue};
          }
        `}
      </style>
    </div>
  );
};
export default Report;
