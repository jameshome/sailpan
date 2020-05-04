import React from "react";
import style from "../utils/style";

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
        <span>{addcommas(stat.cases)}</span>
        cases
      </div>
      <div>
        <span>{addcommas(stat.deaths)}</span>
        deaths
      </div>
      <style jsx>
        {`
          a {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 3px 3px;
            color: ${style.color.blue};
            background-color: ${style.color.blue08};
            border-radius: 21px;
            flex: 1;
          }

          a:first-child {
            margin-right: 0;
          }

          a:last-child {
            margin-left: 0;
          }

          div {
            flex: 1;
            text-align: center;
            font: ${style.font.body};
            line-height: 1;
            padding: 0 6px;
          }

          div:first-of-type {
            border-right: 3px solid ${style.color.cream};
          }

          span {
            font: ${style.font.stat};
            display: block;
            margin: 2px 0;
          }

          img {
            margin: 3px;
          }
        `}
      </style>
    </a>
  );
};
export default Regionstat;
