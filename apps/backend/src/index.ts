import express, { NextFunction, Request, Response, Router } from "express";
import dotenv from "dotenv";
import logger from "morgan";
import { healthCheckController } from "./health";
import { toNodeHandler } from "better-auth/node";
import { auth } from '@workspace/common/auth';

dotenv.config();

const app = express();

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));

const PORT = process.env.BACKEND_PORT || 4000;

// const v1Route = Router();

// app.use("/api/v1", v1Route);

app.use("/health", healthCheckController);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "This is the backend for the muzer app!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
