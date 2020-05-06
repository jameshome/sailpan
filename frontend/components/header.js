import React from "react";
import Link from "next/link";
import Stats from "../components/stats";
import style from "../utils/style";

const Header = ({ region }) => {
  return (
    <div>
      <Link href="/">
        <a>
          <span className="nowrap"> Sailing Through </span>{" "}
          <span className="nowrap"> the Pandemic </span>
        </a>
      </Link>
      <Stats region={region} />
      <style jsx>
        {`
          div {
            width: 100%;
            position: relative;
            box-shadow: ${style.elevation.down};
            padding: 0 0 24px 0;
            text-align: center;
          }

          a {
            display: block;
            margin: 12px 18px 8px;
            font: ${style.font.site};
            color: ${style.color.blue};
            text-transform: uppercase;
          }

          a:hover {
            color: ${style.color.blue};
            border-bottom: 1px solid transparent;
          }

          @media screen and ${style.breakpoint.columns} {
            a {
              margin: 18px 18px 12px;
              font: ${style.font.site_lg};
            }
        `}
      </style>
    </div>
  );
};
export default Header;
