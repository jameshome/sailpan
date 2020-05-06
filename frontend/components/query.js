import React from "react";
import { useQuery } from "@apollo/react-hooks";
import style from "../utils/style";

const Query = ({ children, query, vars }) => {
  const { data, loading, error } = useQuery(query, { variables: vars });
  if (loading) return <p></p>;
  if (error)
    return (
      <div>
        SAILPAN will return...
        <p>{JSON.stringify(error)}</p>
        <style jsx global>{`
          @font-face {
            font-family: "Racing Sans One";
            font-style: normal;
            font-weight: 400;
            src: local("Racing Sans One"), local("RacingSansOne-Regular"),
              url("../fnt/racing-sans-one-v7-latin-regular.woff2")
                format("woff2"),
              url("../fnt/racing-sans-one-v7-latin-regular.woff") format("woff");
          }
          body {
            font: ${style.font.heading};
            background-color: ${style.color.cream};
            color: ${style.color.blue};
            margin: 0;
          }
          div {
            display: flex;
            flex-flow: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            height: 80vh;
            width: 50vw;
          }
          p {
            font-size: 6px;
          }
        `}</style>
      </div>
    );

  return children({ data });
};
export default Query;
