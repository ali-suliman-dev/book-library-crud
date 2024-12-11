import pool from "../../db/db";
import { Book } from "../../db/models/book";

export const getAllBooks = async (): Promise<Book[]> => {
  const result = await pool.query("SELECT * FROM books");
  return result.rows;
};

export const getBookById = async (id: number): Promise<Book> => {
  const result = await pool.query("SELECT * FROM books WHERE id = $1", [id]);

  if (result.rows.length === 0) {
    throw new Error(`Update book failed. No book found with ID ${id}.`);
  }

  return result.rows[0];
};

export const createBook = async (book: Book): Promise<void> => {
  const { title } = book;

  try {
    const result = await pool.query(
      `INSERT INTO books (title) VALUES ($1) RETURNING *`,
      [title]
    );

    console.log(`Book created successfully: ${JSON.stringify(result.rows[0])}`);
  } catch (e) {
    console.error("Error in createBook: ", e);
    throw new Error(
      "An error occurred while creating the book."
    );
  }
};

export const updateBook = async (id: number, book: Book) => {
  const newTitle = book.title
  try {
    const result = await pool.query(
      `UPDATE books SET title = $1 WHERE id = $2 RETURNING *`,
      [newTitle, id]
    );

    if (result.rows.length === 0) {
      throw new Error(`Update book failed. No book found with ID ${id}.`);
    }

    console.log(`Book updated successfully: ${JSON.stringify(result.rows[0])}`);
  } catch (e) {
    console.error("Error in updateBook: ", e);
    throw new Error("An error occurred while updating the book.");
  }
}

export const deleteBook = async (id: number) => {
  try {
    const result = await pool.query(
      `DELETE FROM books WHERE id = $1 RETURNING *`,
      [id]
    );

    if (result.rows.length === 0) {
      throw new Error(`No book found with ID ${id}. Delete operation failed.`);
    }

    console.log(`Book deleted successfully: ${JSON.stringify(result.rows[0])}`);
  } catch (e) {
    console.error("Error in deleteBook: ", e);

    throw new Error("An error occurred while deleting the book. Please try again later.");
  }
}