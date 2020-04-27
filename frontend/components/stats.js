import React from "react";
import Stat from "./stat";
import color from "../utils/style";

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
            width: 100%;
            max-width: 770px;
            margin: auto;
            background-color: ${color.cream};
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};
export default Stats;
