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
          <Moment format="HH:mm">{report.reported_at}</Moment> CT
        </time>

        <p>{report.category.replace(/_/g, " ").toUpperCase()}</p>

        {showLocation && (
          <Locations report={report} key={`locations__${report.id}`} />
        )}

        <p className="brief">
          {report.conditions.map((condition) => {
            return (
              <strong key={`${report.id}-${condition.id}`}>
                {condition.name}.{" "}
              </strong>
            );
          })}
          {report.brief}
        </p>

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
          }

          p {
            margin: 2px 0;
          }

          .brief {
            color: ${style.color.black};
          }

          h2 {
            margin: 0;
            padding-top: 12px;
            border-top: 1px solid ${style.color.blue_25};
            text-align: center;
            font: ${style.font.heading};
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
