import React from "react";
import Cases from "../components/cases";

const Header = ({ regionName }) => {
  return (
    <div>
      <h3>
        pandemic-related port and passage information for liveaboard sailors
      </h3>
      <h1>Sailing Through the Pandemic</h1>
      <h4>COVERAGE AREA — {regionName}</h4>
      <Cases />
      <style jsx>
        {`
          div {
            width: 100%;
            max-width: 770px;
            margin: 0 auto 6px;
          }

          h1,
          h3,
          h4 {
            text-align: center;
            margin: 12px;
          }

          h1 {
            font: 400 2.8em/0.8em "Racing Sans One", sans-serif;
            text-transform: uppercase;
          }

          h3 {
            font: 400 italic 1.2em/1.4em Overpass, sans-serif;
          }
        `}
      </style>
    </div>
  );
};
export default Header;
