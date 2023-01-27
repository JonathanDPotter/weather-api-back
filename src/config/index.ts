import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  HOSTNAME,
  NODE_ENV,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_HOST,
  MONGO_COLLECTION,
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

const mongo = {
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  host: MONGO_HOST,
  collection: MONGO_COLLECTION,
  url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_COLLECTION}`,
  options: { retryWrites: true },
};

const config = { server, mongo, weatherAPI, geoApify };

export default config;
