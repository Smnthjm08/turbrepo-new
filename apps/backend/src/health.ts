import { Request, Response } from "express";

export const healthCheckController = (req: Request, res: Response) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
  });
};
