"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const welcome_json_1 = __importDefault(require("../../welcome.json"));
const welcome = (req, res) => {
    res.json(welcome_json_1.default);
};
exports.default = { welcome };
