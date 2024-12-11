import app from "./app";
import { initDB } from "./db/utils/initDB";

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await initDB();
    console.log("+ Database setup complete.");

    app.listen(PORT, () =>
      console.log(`Server running at PORT: ${PORT} \nurl: http://localhost:${PORT}`)
    );
  } catch (e) {
    console.error("- Failed to start the server: ", e);
    process.exit(1)
  }
}

startServer();