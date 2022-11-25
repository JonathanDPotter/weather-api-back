"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const geoApify_1 = __importDefault(require("../controllers/geoApify"));
const router = (0, express_1.Router)();
router.get("/city/:lat/:lon", geoApify_1.default.getCity);
router.get("/coords/:zip", geoApify_1.default.getCoordsFromZip);
exports.default = router;
