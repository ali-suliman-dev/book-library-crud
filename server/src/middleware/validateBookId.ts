import { Request, Response, NextFunction } from "express";

export const validateBookID = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookID = parseInt(req.params.id, 10);

  if (isNaN(bookID)) {
    res
      .status(400)
      .json({ error: "Invalid book ID. Please provide a valid number." });
  }

  next();
};
