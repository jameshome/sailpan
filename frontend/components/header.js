import React, { useState } from "react";
import Link from "next/link";
import Stats from "../components/stats";
import style from "../utils/style";

const Header = ({ region }) => {
  const [showNote, setShowNote] = useState(false);
  function toggleNote() {
    setShowNote(!showNote);
  }

  return (
    <div>
      <div
        className="note-details"
        style={{
          display: showNote ? "flex" : "none",
        }}
        onClick={toggleNote}
      >
        <div className="note-details-content">
          <h2>FAIR WINDS!</h2>

          <p>
            About a year ago, it became clear that the pandemic was going to
            interrupt our cruising plans. I made SailPan to help us cruisers
            figure out our best bets for weathering this difficult time. SailPan
            reports from dozens of fellow cruisers helped Pacific Mexico and Sea
            of Cortez sailors move around relatively safely with minimal impact
            on the locals. Thanks to all who made reports around the region!
          </p>

          <p>
            While the pandemic is still with us, we've all learned to wear masks
            and follow protocols. Since most places in the region are now
            operating pretty normally,{" "}
            <b>SailPan will stop posting new reports on March 25, 2021.</b>
          </p>
          <p>
            As always, it's a good idea to contact marinas before arriving, talk
            to other cruisers about recent experiences in anchorages you plan to
            visit, and above all, respect the locals.
          </p>

          <span className="button">GOT IT</span>
        </div>
      </div>
      <div className="note" onClick={toggleNote}>
        <span className="highlight">NOTICE:</span> No new updates will be made
        to SailPan <span className="detailLink">LEARN MORE</span>
      </div>
      <Link href="/">
        <a>
          <span className="nowrap"> Sailing Through </span>{" "}
          <span className="nowrap"> the Pandemic </span>
        </a>
      </Link>
      <Stats region={region} />
      <style jsx>
        {`

          .note-details {
            position: fixed;
            display: none;
            z-index: 20;
            background-color: ${style.color.blue_70};
            height: 100%;
            width: 100%;
          }

          .note-details-content {
            background-color: ${style.color.cream};
            width: 95vw;
            max-width: 550px;
            border-radius: 6px;
            margin: auto;
            
          }

          .note-details-content h2 {
            font: ${style.font.heading_1};
            margin: 12px;
          }

          .note-details-content p {
            text-align: left;
            margin: 12px;

          }

          .note {
            background-color: ${style.color.orange};
            color: ${style.color.cream};
            padding: 6px;
            box-shadow: none;
          }

          .note .highlight {
            font: ${style.font.heading_1}
          }

          .note .detailLink {
            padding-left: 4px;
            font: ${style.font.label}
          }

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
