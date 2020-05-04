import React from "react";
import Link from "next/link";
import moment from "moment";
import Report from "../components/report";
import style from "../utils/style";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <>
      <h1>Welcome to SailPan</h1>

      <p className="tagline">Pandemic-related port & passage reports</p>

      <p className="region">for Pacific Mexico & Gulf of California</p>

      <p>
        SailPan port and passage reports are sourced with care, but policies
        change and enforcement is variable. Use this information at your own
        risk, call ahead, expect the unexpected, and above all, respect the
        locals.{" "}
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <nav>
        <a
          href="mailto:error@sailpan.info?Subject=SAILPAN: I found an error"
          target="_blank"
        >
          Report error
        </a>

        <a
          href="mailto:report@sailpan.info?Subject=SAILPAN: I have a report"
          target="_blank"
          className="primary"
        >
          Send Report
        </a>
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
          h1 {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }

          .tagline {
            text-align: center;
            text-transform: uppercase;
            line-height: 1.1;
          }

          .region {
            text-align: center;
            font-weight: 600;
          }

          p {
            font: ${style.font.body};
            margin: 3px 18px;
          }

          nav {
            font: ${style.font.body};
            margin: 6px 18px 12px;
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          nav a {
            text-align: center;
            line-height: 1.2;
          }
        `}
      </style>
    </>
  );
};
export default Reports;
