"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startDb = startDb;
exports.closeDb = closeDb;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
//For env File
dotenv_1.default.config();
const connectionString = process.env.CONNECTION_STRING || "";
console.log("string", connectionString);
function startDb() {
    mongoose_1.default
        .connect(connectionString, {})
        .then(() => {
        console.log("MongoDB connection successful");
    });
    // This is mongoose's async callback chain
    return mongoose_1.default.connection
        .on("error", console.log)
        .on("disconnected", startDb);
}
function closeDb() {
    mongoose_1.default.connection.close();
}
