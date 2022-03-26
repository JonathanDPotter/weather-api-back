import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
// config
import config from "./config";
// routes
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import geoApifyRoutes from "./routes/geoApify";

const server = express();

const { port } = config.SERVER;
const { url, options, collection } = config.MONGO;

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);

  // connect to mongoose
  mongoose.connect(url, options, () =>
    console.log(`Connected to mongodb collection ${collection}`)
  );

  // cors setup
  server.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
      credentials: true,
    })
  );

  // parse requests
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));

  // logging with morgan
  server.use(morgan("dev"));

  // routes
  server.use("", indexRoutes);
  server.use("/api/user", userRoutes);
  server.use("/api/geoapify", geoApifyRoutes);
});
