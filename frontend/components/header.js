import React from "react";
import Stats from "../components/stats";
import { MapStateContext } from "../utils/mapstate";

const Header = ({ region }) => {
  return (
    <div>
      <h3>
        pandemic-related port and passage information for liveaboard sailors
      </h3>
      <h1>Sailing Through the Pandemic</h1>
      <h4>COVERAGE AREA — {region.name}</h4>
      <Stats region={region} />
      <style jsx>
        {`
          div {
            width: 100%;
            position: relative;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
            padding: 0 0 24px 0;
          }

          h1,
          h3,
          h4 {
            width: 100%;
            max-width: 770px;
            text-align: center;
            margin: 6px auto;
          }
        `}
      </style>
    </div>
  );
};
export default Header;
