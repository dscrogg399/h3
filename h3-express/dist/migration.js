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
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./db");
const questions_1 = require("./models/questions");
const facts_1 = require("./models/facts");
const data_1 = require("./data");
function migrateQuestions() {
    return __awaiter(this, void 0, void 0, function* () {
        // Looping through the questions from the data.js file
        for (let i = 0; i < data_1.quizQuestions.length; i++) {
            const q = data_1.quizQuestions[i];
            const correct = q.possibilities[data_1.correctAnswers[i]].answer;
            q.possibilities.splice(data_1.correctAnswers[i], 1);
            const data = {
                question_type: q.type,
                question_text: q.text,
                question_possibilities: q.possibilities,
                correct_answer: correct,
            };
            yield questions_1.Question.create(data);
        }
    });
}
function migrateFacts() {
    return __awaiter(this, void 0, void 0, function* () {
        // Looping through the facts data from the data.js file
        for (let i = 0; i < data_1.turtlesData.length; i++) {
            const data = data_1.turtlesData[i];
            const facts = {
                fact_type: data.type,
                fact_image_url: data.image_url,
                fact_data: {
                    locations: data.locations,
                    size: data.size,
                    diet: data.diet,
                    lifespan: data.lifespan,
                },
                fact_description: data.description,
            };
            yield facts_1.Fact.create(facts);
        }
    });
}
function migrate() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, db_1.startDb)();
        yield migrateFacts();
        yield migrateQuestions();
        (0, db_1.closeDb)();
    });
}
migrate();
