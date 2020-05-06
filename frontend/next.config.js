require("dotenv").config();

const prod = process.env.NODE_ENV === "production";

module.exports = {
  poweredByHeader: false,
  env: {
    API_URL: prod ? process.env.PROD_API_URL : process.env.DEV_API_URL,
    DATA_URL: prod ? process.env.PROD_DATA_URL : process.env.DEV_DATA_URL,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    MAPBOX_STYLE_URL: process.env.MAPBOX_STYLE_URL,
  },
  devIndicators: {
    autoPrerender: false,
  },
};
