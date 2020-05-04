require("dotenv").config();

module.exports = {
  poweredByHeader: false,
  env: {
    API_URL: process.env.API_URL,
    DATA_URL: process.env.DATA_URL,
    MAPBOX_API_KEY: process.env.MAPBOX_API_KEY,
    MAPBOX_STYLE_URL: process.env.MAPBOX_STYLE_URL
  },
  devIndicators: {
    autoPrerender: false,
  },
};
