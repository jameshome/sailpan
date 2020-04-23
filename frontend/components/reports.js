import React from "react";
import Report from "./report";
import moment from "moment";

const Reports = ({ reports }) => {
  let previousDate;
  return (
    <section>
      {reports.map((report, i) => {
        let printDate;
        let date = report.reported_at.substr(0, 10);
        if (date !== previousDate) {
          report.date = moment(date).format("MMMM DD, YYYY");
        }
        previousDate = date;
        return <Report report={report} key={`report__${report.id}`} />;
      })}
    </section>
  );
};
export default Reports;
