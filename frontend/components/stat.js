import React from "react";
import color from "../utils/style";

const Regionstat = ({ stat }) => {
  let addcommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <a href={stat.url} target="_blank">
      <img
        src={
          "../img/icon-places-" +
          stat.name.replace(/\s+/g, "").toLowerCase() +
          ".png"
        }
        width="36"
        height="36"
        alt={stat.name}
      />
      <div>
        <h2>{addcommas(stat.cases)}</h2>
        <p>cases</p>
      </div>
      <div>
        <h2>{addcommas(stat.deaths)}</h2>
        <p>deaths</p>
      </div>
      <style jsx>
        {`
          a {
            display: flex;
            justify-content: space-evenly;
            margin: 3px 3px;
            color: ${color.blue};
            background-color: ${color.blue08};
            border-radius: 21px;
            flex: 1;
          }

          div {
            text-align: center;
            flex: 1;
          }

          div:first-of-type {
            border-right: 3px solid ${color.cream};
          }

          p {
            margin: 0;
            font-size: 0.875rem;
          }

          p:first-child {
            margin-right: 0;
          }

          p:last-child {
            margin-left: 0;
          }

          img {
            margin: 3px;
          }

          h2 {
            margin: 6px 0 0 0;
          }
        `}
      </style>
    </a>
  );
};
export default Regionstat;
