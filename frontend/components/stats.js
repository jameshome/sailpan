import React from "react";
import Stat from "../components/stat";
import style from "../utils/style";

const Stats = ({ region }) => {
  let previousDate;
  return (
    <div>
      {region.stats.map((stat, i) => {
        return <Stat stat={stat} key={`stat__${stat.id}`} />;
      })}

      <style jsx>
        {`
          div {
            z-index: 1;
            display: flex;
            justify-content: space-between;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -24px;
            height: 48px;
            border-radius: 24px;
            margin: auto 6px;
            background-color: ${style.color.cream};
            box-shadow: ${style.elevation.inset};
            overflow-x: auto;
          }
          @media screen and ${style.breakpoint.columns} {
            div {
            }

          @media screen and ${style.breakpoint.widestats} {
            div {
              width: 100%;
              max-width: 770px;
              margin: auto;
              box-shadow: ${style.elevation.down};
            }
        `}
      </style>
    </div>
  );
};
export default Stats;
