"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./db");
const routes_1 = require("./routes");
//For env File
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
app.set("json spaces", 2);
app.use(routes_1.router);
app.get("/", (req, res) => {
    res.send("Welcome to Express & TypeScript Server");
});
(0, db_1.startDb)().once("open", () => {
    app.listen(port, () => {
        console.log(`Server is Fire at http://localhost:${port}`);
    });
});
