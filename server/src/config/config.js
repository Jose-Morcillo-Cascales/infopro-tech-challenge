const dotenv = require("dotenv");
const logger = require("loglevel");

dotenv.config();

logger.enableAll();

//const ENV = process.env.NODE_ENV || "development";

const CONFIG = {
  development: {
    app: {
      PORT: process.env.PORT || 4000,
    },

    logger: {
      warn: logger.warn,
      info: logger.info,
      error: logger.error,
    },

    db: {
      DB_IP: process.env.DB_IP,
      DB_USER: process.env.DB_USER,
      DB_PASSWORD: process.env.DB_PASSWORD,
      DB: process.env.DB

    }
  }
};

module.exports = {CONFIG};