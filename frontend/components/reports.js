import React from "react";
import Report from "./report";
import moment from "moment";
import color from "../utils/style";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <div>
      <p>
        These are uncertain times. Reports are sourced with care, but policies
        change and enforcement is variable. Use this information at your own
        risk, expect the unexpected, and above all, respect the locals.{" "}
        <a href="/how">How Sailpan works</a>
      </p>
      <nav>
        <ul>
          <li>
            <a href="mailto:error@sailpan.info">Report errors</a>
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
          p {
            margin: 12px;
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
            margin: 12px;
            border-bottom: 1px solid ${color.blue50};
          }
        `}
      </style>
    </div>
  );
};
export default Reports;
