import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  HOSTNAME,
  NODE_ENV,
  GEOAPIFY_API_KEY,
  WEATHER_API_KEY,
} = process.env;

const server = {
  hostname: HOSTNAME,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOSTNAME}:${PORT}/`
      : `https://${HOSTNAME}:${PORT}/`,
};

const weatherAPI = {
  apiKey: WEATHER_API_KEY,
};

const geoApify = {
  apiKey: GEOAPIFY_API_KEY,
};


const config = { server, weatherAPI, geoApify };

export default config;
