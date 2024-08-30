"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
const facts_1 = require("../models/facts");
const questions_1 = require("../models/questions");
router.get("/data", dataHandler);
router.get("/questions", questionHandler);
router.get("/answers", answerHandler);
function dataHandler(req, res) {
    (0, facts_1.getTurtleData)().then((data) => {
        res.json(data);
    });
}
function questionHandler(req, res) {
    (0, questions_1.getQuizQuestions)().then((data) => {
        res.json(data);
    });
}
function answerHandler(req, res) {
    (0, questions_1.getCorrectAnswers)().then((data) => {
        res.json(data);
    });
}
