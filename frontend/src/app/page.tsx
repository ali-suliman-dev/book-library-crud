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
  Divider,
  Stack,
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
            <Stack key={book.id}>
              <ListItem key={book.id}>
                <ListItemText
                  primary={book.title}
                  secondary={`ID: ${book.id}`}
                  slotProps={{ secondary: { color: "#555" } }}
                />
              </ListItem>

              <Divider sx={{ borderColor: "#fff2" }} component="li" />
            </Stack>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Home;
