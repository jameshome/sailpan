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

      <div className="tagline">Pandemic-related port & passage reports</div>
      <div className="region">for Pacific Mexico & Gulf of California</div>
      <p>
        SailPan port and passage reports are sourced with care, but policies
        change and enforcement is variable. Use at your own risk, call ahead,
        expect the unexpected, and above all, <b>respect the locals.</b>
      </p>
      <nav>
        <a
          href="mailto:error@sailpan.info?Subject=SAILPAN: I found an error"
          target="_blank"
        >
          Report error
        </a>

        <Link href="/about">
          <a>How SailPan works</a>
        </Link>

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
          report.date = moment(date).format("MMMM D, YYYY");
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

          div {
            font: ${style.font.body};
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
            margin: 3px 18px 12px;
          }

          nav {
            font: ${style.font.body};
            margin: 12px 18px 12px;
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }

          nav .primary {
            margin-left: auto;
            margin-right: 0;
          }

          nav a {
            text-align: center;
            line-height: 1.2;
            margin-right: 18px;
          }
        `}
      </style>
    </>
  );
};
export default Reports;
