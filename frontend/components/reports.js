import React from "react";
import Link from "next/link";
import moment from "moment";
import Report from "../components/report";
import color from "../utils/style";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <div>
      <p>
        These are uncertain times. SailPan reports are sourced with care, but
        policies change and enforcement is variable. Use this information at
        your own risk, call ahead, expect the unexpected, and above all, respect
        the locals.{" "}
        <Link href="/how">
          <a>How SailPan works</a>
        </Link>
      </p>
      <nav>
        <ul>
          <li>
            <a
              href="mailto:error@sailpan.info?Subject=SAILPAN: I found an error"
              target="_blank"
            >
              Report an error
            </a>
          </li>
          <li>
            <a
              href="mailto:report@sailpan.info?Subject=SAILPAN: I have a report"
              target="_blank"
              className="primary"
            >
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
        return (
          <Report
            report={report}
            key={`report__${report.id}`}
            showLocation={true}
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

          nav {
            margin: 6px 18px 6px 60px;
          }

          ul {
            width: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          li {
            margin: 0 0 12px 18px;
          }

          li:first-child {
            margin-left: 0;
            margin-right: auto;
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
};
export default Reports;
