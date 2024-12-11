"use client";

import { useFetchBooks } from "@/hooks";

import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Alert,
} from "@mui/material";

const Home = () => {
  const { books, loading, error } = useFetchBooks();

  return (
    <Container style={{ marginTop: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Books List
      </Typography>

      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      {!loading && !error && (
        <List>
          {books.map((book) => (
            <ListItem key={book.id}>
              <ListItemText primary={book.title} secondary={`ID: ${book.id}`} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Home;
