import pool from "../db";
import { seedBooks } from "./seedBooks";

export const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY
        title VARCHAR(255) NOT NULL
      )
    `);

    console.log("+ Table initialized successfully");

    const result = await pool.query(`SELECT COUNT(*) AS total FROM books`);
    const count = parseInt(result.rows[0].total, 10);

    if (count === 0) {
      await seedBooks();
    } else {
      console.log("Books table already has data. Skipping seed.");
    }
  } catch (e) {
    console.error("- Error in initializing database: ", e);
    throw new Error("- Database initialization failed");
  }
};
