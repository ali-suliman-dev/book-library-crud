import app from "./app";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server running at PORT: ${PORT} \nurl: http://localhost:${PORT}`)
);
