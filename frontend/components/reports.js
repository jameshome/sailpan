import React from "react";
import Report from "./report";
import moment from "moment";
import color from "../utils/style";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <div>
      <p>
        These are uncertain times. SAILPAN reports are sourced with care, but
        policies change and enforcement is variable. Use this information at
        your own risk, expect the unexpected, and above all, respect the locals.{" "}
        <a href="/how">How SAILPAN works</a>
      </p>
      <nav>
        <ul>
          <li>
            <a href="mailto:error@sailpan.info">Report error</a>
          </li>
          <li>
            <a href="mailto:report@sailpan.info" className="primary">
              Send a Report
            </a>
          </li>
        </ul>
      </nav>
      {reports.map((report, i) => {
        let printDate;
        let date = report.reported_at.substr(0, 10);
        if (date !== previousDate) {
          report.date = moment(date).format("MMMM DD, YYYY");
        }
        previousDate = date;
        return <Report report={report} key={`report__${report.id}`} />;
      })}
      <style jsx>
        {`
          div {
            margin: 42px 24px 48px;
          }

          p {
            margin: 6px 0;
            font-size: 0.875rem;
          }

          ul {
            width: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }

          li {
            margin: 0 0 12px 18px;
          }

          li:first-child {
            margin-left: 0;
            margin-right: auto;
          }

          nav {
            margin: 6px 0;
          }

          img {
            display: block;
            margin: 48px auto;
          }
        `}
      </style>
    </div>
  );
};
export default Reports;
