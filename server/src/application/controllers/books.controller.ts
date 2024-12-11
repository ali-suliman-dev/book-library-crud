import { NextFunction, Request, Response } from "express";
import * as bookService from "../services/books.service";

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookID = parseInt(req.params.id);

  try {
    const book = await bookService.getBookById(bookID);
    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookID = parseInt(req.params.id);

  try {
    const book = await bookService.updateBook(bookID, req.body);
    res.json(book);
  } catch (err) {
    next(err);
  }
};

export const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bookID = parseInt(req.params.id);

  try {
    const book = await bookService.deleteBook(bookID);
    res.json(book);
  } catch (err) {
    next(err);
  }
};
