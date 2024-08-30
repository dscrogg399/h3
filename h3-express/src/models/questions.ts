import mongoose from "mongoose";
import { correctAnswers, quizQuestions } from "../data";

const QuestionSchema = new mongoose.Schema({
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

const Question = mongoose.model("Question", QuestionSchema);

export {
  Question,
  getCorrectAnswers,
  getQuizQuestions,
};

function getCorrectAnswers() {
  return Promise.resolve(correctAnswers);
}

function getQuizQuestions() {
  return Promise.resolve(quizQuestions);
}
