import express from "express";
import bookRouter from "./application/routes/books.routes"
import swaggerUi from "swagger-ui-express";
import swaggerConfig from "./docs/swagger/config";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());
app.use("/books", bookRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export default app;
