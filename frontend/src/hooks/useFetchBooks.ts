import { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "@/interfaces";

export const useFetchBooks = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/books`);
        setBooks(response.data);
      } catch (e) {
        setError(`${e}` || "Failed to fetch books.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return { books, loading, error }
}