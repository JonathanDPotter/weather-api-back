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
const baseURL = "https://api.weatherapi.com/v1/";
const getCurrent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = req.params;
    try {
        const response = yield axios_1.default.get(`${baseURL}current.json?key=${config_1.default.WEATHERAPI.apiKey}&q=${lat} ${lon}&aqi=no`);
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
const getThreeDay = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = req.params;
    try {
        const response = yield axios_1.default.get(`${baseURL}forecast.json?key=${config_1.default.WEATHERAPI.apiKey}&q=${lat} ${lon}&days=3&aqi=no&alerts=yes`);
        res.status(200).json(response.data);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.default = { getCurrent, getThreeDay };
