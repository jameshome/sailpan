require("dotenv").config();

module.exports = {
  poweredByHeader: false,
  env: {
    API_URL: process.env.API_URL,
    DATA_URL: process.env.DATA_URL,
  },
};
