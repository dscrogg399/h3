import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import { startDb } from "./db.js";
import { router } from "./routes/index.js"

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.set("json spaces", 2);

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

startDb().once("open", () => {
  app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
  });
});
