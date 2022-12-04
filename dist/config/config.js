"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    jwtSecret: process.env.JWT_SECRET || "somesecrettoken",
    DB: {
        URI: process.env.MONGODB_URL2 || "",
        // URI: "mongodb://127.0.0.1/crud_recetas",
        // USER: process.env.MONGODB_USER,
        // PASSWORD: process.env.MONGODB_PASSWORD,
    },
};
