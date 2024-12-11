import express from "express"
import * as bookController from "../controllers/books.controller";
import { validateBook } from "../../middleware/validateBook";
import { validateBookID } from "../../middleware/validateBookId";

const router = express.Router()

router.get("/", bookController.getAllBooks);
router.get("/:id", validateBookID, bookController.getBookById);

router.post("/", validateBook, bookController.createBook);
router.put("/:id", validateBook, bookController.updateBook);

router.delete("/:id", bookController.deleteBook);


export default router;