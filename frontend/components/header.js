import React from "react";
import Stats from "../components/stats";
import style from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Header = ({ region }) => {
  return (
    <div>
      <p>
        pandemic-related port and passage information for liveaboard sailors
      </p>
      <strong>Sailing Through the Pandemic</strong>
      <p>COVERAGE AREA — {region.name}</p>
      <Stats region={region} />
      <style jsx>
        {`
          div {
            width: 100%;
            position: relative;
            box-shadow: ${style.elevation.first};
            padding: 0 0 24px 0;
            text-align: center;
          }

          strong {
            display: block;
            margin: 9px 18px 6px;
            font: ${style.font.site};
            text-transform: uppercase;
          }

          p {
            margin: 6px 12px;
            font: ${style.font.body};
          }

          p:first-child {
            font: ${style.font.tagline};
          }
        `}
      </style>
    </div>
  );
};
export default Header;
