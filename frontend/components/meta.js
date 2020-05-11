import React from "react";
import Head from "next/head";

const Meta = ({ title, url, description, image }) => {
  image = image
    ? "https://sailpan.info/img/" + image
    : "https://sailpan.info/img/social-site.png";
  return (
    <Head>
      <title>{title} — SailPan</title>
      <meta name="description" content={description} />
      <meta property="og:type" key="ogtype" content="website" />
      <meta property="og:image" key="ogimage" content={image} />
      <meta property="og:url" key="ogurl" content={url} />
      <meta property="og:title" key="ogtitle" content={title + " on SailPan"} />
      <meta
        property="og:description"
        key="ogdescription"
        content={description}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" value="@sailpaninfo" />
      <meta name="twitter:title" value={title + " on SailPan"} />
      <meta name="twitter:description" value={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" value={url} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  );
};
export default Meta;
