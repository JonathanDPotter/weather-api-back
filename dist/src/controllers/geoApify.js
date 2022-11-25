"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("../config"));
const { apiKey } = config_1.default.GEOAPIFY;
const getCity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = req.params;
    console.log(req.params);
    try {
        const result = yield axios_1.default.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`);
        const { city, county, state, country } = result.data.features[0].properties;
        res.json(`${city ? city : county} ${state}, ${country}`);
    }
    catch (error) {
        res.json(error);
    }
});
const getCoordsFromZip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { zip } = req.params;
    try {
        const result = yield axios_1.default.get(`https://api.geoapify.com/v1/geocode/search?text=${zip}&lang=en&limit=10&type=postcode&filter=us&format=json&apiKey=${apiKey}`);
        const { lat, lon } = result.data.results[0];
        const coordsToReturn = {
            latitude: lat.toString(),
            longitude: lon.toString(),
        };
        res.json(coordsToReturn);
    }
    catch (error) {
        res.json(error);
    }
});
exports.default = { getCity, getCoordsFromZip };
