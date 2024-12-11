import pool from "../db";

export const seedBooks = async () => {
  try {
    await pool.query(`INSERT INTO books (title)
      VALUES
          ('Atomic Habits');
          ('The Richest Man in Babylon'),
          ('The Psychology of Money'),
          ('Pride and Prejudice');
          ('The Art of War');
          ('The Great Gatsby');
          ('1984');
      `);

    console.log("+ Successfully seeded books data");
  } catch (e) {
    console.error("- Error in seeding data: ", e);
    throw new Error("- Seeding data failed");
  }
};
