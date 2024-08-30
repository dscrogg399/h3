import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
const { startDb } = require("./db");

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.set("json spaces", 2);

app.use(require("./routes"));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

startDb().once("open", () => {
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
});
