import React from "react";
import Link from "next/link";
import Moment from "react-moment";

const Report = ({ report }) => {
  return (
    <div>
      {report.date && <h2>{report.date}</h2>}

      <article>
        <p>
          <Moment format="HH:mm">{report.reported_at}</Moment>{" "}
          {report.report_categories.map((category) => {
            return (
              <strong key={`${report.id}-${category.id}`}>
                {category.name}.{" "}
              </strong>
            );
          })}
          {report.brief}
        </p>
      </article>
      <style jsx>
        {`
          article {
            width: 100%;
            max-width: 770px;
            margin: 0 auto 6px;
          }
          h2 {
            font: 400 1.2em/0.8em "Racing Sans One", sans-serif;
            text-transform: uppercase;
            text-align: center;
          }
          p {
            margin: 12px;
            line-height: 2em;
          }
        `}
      </style>
    </div>
  );
};
export default Report;
