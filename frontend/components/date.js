import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const Report = ({ report }) => {
  return (
    <div>
      {report.id}: {report.brief}
      <Moment format="MMM Do YYYY">{report.reported_at}</Moment>
    </div>
  );
};
export default Report;
