import React, { useState, useEffect } from "react";
import Stat from "../components/stat";
import style from "../utils/style";
import fetch from "isomorphic-unfetch";

let regionStats = [];

function useData() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/data/covid19api.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return data;
}

const Stats = ({ region }) => {
  const data = useData();
  if (!data) {
    return null;
  }
  region.stats.forEach((regionCountry, i) => {
    data.Countries.map((dataCountry) => {
      if (regionCountry.code === dataCountry.CountryCode) {
        regionStats.push({
          id: regionCountry.id,
          name: regionCountry.name,
          url: regionCountry.url,
          cases: dataCountry.TotalConfirmed.toString(),
          deaths: dataCountry.TotalDeaths.toString(),
        });
      }
    });
    if (regionCountry.code === "Global") {
      regionStats.push({
        id: regionCountry.id,
        name: regionCountry.name,
        url: regionCountry.url,
        cases: data.Global.TotalConfirmed.toString(),
        deaths: data.Global.TotalDeaths.toString(),
      });
    }
  });
  return (
    <div>
      {regionStats.slice(0, 3).map((stat, i) => {
        return <Stat stat={stat} key={`stat__${i}`} />;
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
