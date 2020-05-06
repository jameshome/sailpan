import React from "react";
import Head from "next/head";

const Meta = ({ title, url, description }) => {
  return (
    <Head>
      <title>{title} — SailPan</title>
      <meta name="description" content={description} />
      <meta property="og:type" key="ogtype" content="website" />
      <meta property="og:url" key="ogurl" content={url} />
      <meta property="og:title" key="ogtitle" content={title + " on SailPan"} />
      <meta
        property="og:description"
        key="ogdescription"
        content={description}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" value={title + " on SailPan"} />
      <meta name="twitter:description" value={description} />
      <meta name="twitter:url" value={url} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};
export default Meta;
