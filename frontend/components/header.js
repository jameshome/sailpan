import React from "react";
import Cases from "../components/cases";
import color from "../utils/style";

const Header = ({ regionName }) => {
  return (
    <header>
      <div>
        <h3>
          pandemic-related port and passage information for liveaboard sailors
        </h3>
        <h1>Sailing Through the Pandemic</h1>
        <h4>COVERAGE AREA — {regionName}</h4>
      </div>
      <Cases />
      <div>
        <p>
          These are uncertain times. Reports are sourced with care, but policies
          change and enforcement is variable. Use this information at your own
          risk, expect the unexpected, and above all, respect the locals.
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="mailto:error@sailpan.info">Report errors</a>
          </li>
          <li>
            <a href="/how">How Sailpan works</a>
          </li>
          <li>
            <a href="mailto:report@sailpan.info" className="primary">
              Send a Report
            </a>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          header {
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

          p {
            margin: 12px;
          }

          ul {
            width: 100%;
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: space-between;
          }

          li {
            margin: 0 0 12px 18px;
          }

          li:first-child {
            margin-left: 0;
            margin-right: auto;
          }

          nav {
            margin: 12px;
            border-bottom: 1px solid ${color.blue50};
          }
        `}
      </style>
    </header>
  );
};
export default Header;
