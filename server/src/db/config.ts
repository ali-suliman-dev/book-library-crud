import dotenv from "dotenv";

dotenv.config();

export const config = {
  db: {
    user: process.env.DB_USER || "postgres",
    host: process.env.DB_HOST || "localhost",
    database: process.env.DB_NAME || "book_crud",
    password: process.env.DB_PASSWORD || "password",
    port: parseInt(process.env.DB_PORT || "5432", 10),
  },
};
