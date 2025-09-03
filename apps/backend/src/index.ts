import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

const PORT = process.env.BE_PORT || 4000;
console.log("====",PORT);

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
