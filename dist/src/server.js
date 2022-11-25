"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const helmet_1 = __importDefault(require("helmet"));
// config
const config_1 = __importDefault(require("./config"));
// routes
const routes_1 = __importDefault(require("./routes"));
const geoApify_1 = __importDefault(require("./routes/geoApify"));
const weatherAPI_1 = __importDefault(require("./routes/weatherAPI"));
const server = (0, express_1.default)();
const { port } = config_1.default.SERVER;
const { url, options, collection } = config_1.default.MONGO;
server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
    // connect to mongoose
    mongoose_1.default.connect(url, options, () => console.log(`Connected to mongodb collection ${collection}`));
    // cors setup
    server.use((0, cors_1.default)({
        origin: "*",
        allowedHeaders: "*",
    }));
    // add helmet
    server.use((0, helmet_1.default)());
    // parse requests
    server.use(express_1.default.json());
    server.use(express_1.default.urlencoded({ extended: true }));
    // logging with morgan
    server.use((0, morgan_1.default)("dev"));
    // routes
    server.use("", routes_1.default);
    server.use("/api/geoapify", geoApify_1.default);
    server.use("/api/weather", weatherAPI_1.default);
});
