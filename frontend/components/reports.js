import React from "react";
import Link from "next/link";
import moment from "moment";
import Report from "../components/report";
import style from "../utils/style";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <div>
      <h1>Welcome to SAILPAN</h1>
      <p>
        SAILPAN port and passage reports are sourced with care, but policies
        change and enforcement is variable. Use this information at your own
        risk, call ahead, expect the unexpected, and above all, respect the
        locals.{" "}
      </p>
      <nav>
        <a
          href="mailto:error@sailpan.info?Subject=SAILPAN: I found an error"
          target="_blank"
        >
          Report an error
        </a>

        <Link href="/how">
          <a>About SAILPAN</a>
        </Link>

        <a
          href="mailto:report@sailpan.info?Subject=SAILPAN: I have a report"
          target="_blank"
          className="primary"
        >
          Send a Report
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
          div {
            margin: 48px 0;
            font: ${style.font.body};
          }

          h1 {
            position: absolute;
            top: -9999px;
            left: -9999px;
          }

          p {
            margin: 6px 18px 6px 60px;
          }

          nav {
            margin: 12px 15px 12px 60px;
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          nav a {
            text-align: center;
            line-height: 1.2;
            margin-right: 3px;
          }
        `}
      </style>
    </div>
  );
};
export default Reports;
