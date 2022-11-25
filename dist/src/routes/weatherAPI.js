"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weatherAPI_1 = __importDefault(require("../controllers/weatherAPI"));
const router = (0, express_1.Router)();
router.get("/current/:lat/:lon", weatherAPI_1.default.getCurrent);
router.get("/three-day/:lat/:lon", weatherAPI_1.default.getThreeDay);
exports.default = router;
