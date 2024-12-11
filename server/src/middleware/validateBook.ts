import { NextFunction, Request, Response } from "express";

export const validateBook = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;

  if (!title) {
    res.status(400).json({ error: "Missing required field: title" });
  }

  if (typeof title !== "string") {
    res
      .status(400)
      .json({ error: "Invalid data type. Title must be a string" });
  }

  next();
};
