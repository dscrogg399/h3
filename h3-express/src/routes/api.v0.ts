import express, { Request, Response } from "express";
const router = express.Router();
import { getTurtleData } from "../models/facts";
import { getCorrectAnswers, getQuizQuestions } from "../models/questions";

router.get("/data", dataHandler);
router.get("/questions", questionHandler);
router.get("/answers", answerHandler);

function dataHandler(req: Request, res: Response) {
  getTurtleData().then((data: any) => {
    res.json(data);
  });
}

function questionHandler(req: Request, res: Response) {
  getQuizQuestions().then((data: any) => {
    res.json(data);
  });
}

function answerHandler(req: Request, res: Response) {
  getCorrectAnswers().then((data: any) => {
    res.json(data);
  });
}

export {
  router
};
