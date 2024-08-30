"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
exports.getCorrectAnswers = getCorrectAnswers;
exports.getQuizQuestions = getQuizQuestions;
const mongoose_1 = __importDefault(require("mongoose"));
const data_1 = require("../data");
const QuestionSchema = new mongoose_1.default.Schema({
    question_type: String,
    question_text: String,
    question_possibilities: [
        {
            answer: String,
        },
    ],
    correct_answer: String,
    updated_at: { type: Date, default: Date.now },
});
const Question = mongoose_1.default.model("Question", QuestionSchema);
exports.Question = Question;
function getCorrectAnswers() {
    return Promise.resolve(data_1.correctAnswers);
}
function getQuizQuestions() {
    return Promise.resolve(data_1.quizQuestions);
}
