import { startDb, closeDb } from "./db.js";
import { Question } from "./models/questions.js"
import { Fact } from "./models/facts.js";
import { quizQuestions, correctAnswers, turtlesData } from "./data.js";

async function migrateQuestions() {
  // Looping through the questions from the data.js file
  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];
    const correct = q.possibilities[correctAnswers[i]].answer;
    q.possibilities.splice(correctAnswers[i], 1);
    const data = {
      question_type: q.type,
      question_text: q.text,
      question_possibilities: q.possibilities,
      correct_answer: correct,
    };
    await Question.create(data);
  }
}

async function migrateFacts() {
  // Looping through the facts data from the data.js file
  for (let i = 0; i < turtlesData.length; i++) {
    const data = turtlesData[i];
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
    await Fact.create(facts);
  }
}

async function migrate() {
  startDb();
  await migrateFacts();
  await migrateQuestions();
  closeDb();
}

migrate();