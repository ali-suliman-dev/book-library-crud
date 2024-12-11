import express from "express";
import bookRouter from "./application/routes/books.routes"

const app = express();

app.use(express.json());
app.use("/books", bookRouter);

export default app;
