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
  SERVER_TOKEN_EXPIRETIME,
  SERVER_TOKEN_ISSUER,
  SERVER_TOKEN_SECRET,
  GEOAPIFY_API_KEY,
  WEATHER_API_KEY,
} = process.env;

const SERVER = {
  hostname: HOSTNAME,
  port: PORT,
  env: NODE_ENV,
  baseURL:
    NODE_ENV === "development"
      ? `http://${HOSTNAME}:${PORT}/`
      : `https://${HOSTNAME}:${PORT}/`,
  token: {
    expireTime: SERVER_TOKEN_EXPIRETIME,
    issuer: SERVER_TOKEN_ISSUER,
    secret: SERVER_TOKEN_SECRET || "secret",
  },
};

const MONGO = {
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  host: MONGO_HOST,
  collection: MONGO_COLLECTION,
  url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_COLLECTION}`,
  options: { retryWrites: true },
};

const WEATHERAPI = {
  apiKey: WEATHER_API_KEY,
};

const GEOAPIFY = {
  apiKey: GEOAPIFY_API_KEY,
};

const config = { SERVER, MONGO, WEATHERAPI, GEOAPIFY };

export default config;
