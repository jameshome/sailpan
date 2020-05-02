import React, { useContext } from "react";
import Link from "next/link";
import { FlyToInterpolator } from "react-map-gl";
import Moment from "react-moment";
import Pin from "../components/pin";
import color from "../utils/style";
import { MapStateContext } from "../utils/mapstate";

const Locations = ({ report }) => {
  const [mapState, setMapState] = useContext(MapStateContext);

  return report.locations.map((location) => {
    return (
      <h5 key={`location__${report.id}-${location.id}`}>
        <Link
          href={{
            pathname: "/location/[id]",
            query: { return: "/#" + report.id },
          }}
          as={"/location/" + location.id}
        >
          <span>
            <span
              onClick={() => {
                setMapState({
                  ...mapState,
                  latitude: location.latitude,
                  longitude: location.longitude,
                  zoom: 9,
                  transitionDuration: 1000,
                  transitionInterpolator: new FlyToInterpolator(),
                });
              }}
            >
              <Pin color={color[location.status]} />
              <a>{location.name}</a>
            </span>
          </span>
        </Link>
        <style jsx>
          {`
            article {
              position: relative;
              font-size: 0.875rem;
              margin: 18px 18px 18px 0;
              padding-left: 60px;
              background: url(../img/icon-report-boatreport.png) 12px 0px / 36px
                no-repeat;
            }

            time {
              position: absolute;
              top: 0;
              right: 0;
            }

            p {
              margin: 0;
              color: ${color.black};
            }

            h2 {
              margin: 0;
              padding-top: 12px;
              border-top: 1px solid ${color.blue25};
              text-align: center;
            }

            h4 {
              margin: 0;
            }

            h5 {
              margin: 2px 0 0 0;
              display: inline-block;
              position: relative;
            }

            h5 a {
              margin: 0 12px 0 3px;
              cursor: pointer;
              vertical-align: top;
            }

            em {
              color: ${color.blue};
            }

            em::after {
              content: ", ";
            }

            em:last-child::after {
              content: "";
            }

            em a {
              color: ${color.blue};
            }
          `}
        </style>
      </h5>
    );
  });
};

export default Locations;
