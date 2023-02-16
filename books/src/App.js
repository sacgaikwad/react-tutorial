import { useState, useEffect } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  //fetchBooks();

  const editBookById = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: title,
    });

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    const response = await axios.delete(`http://localhost:3001/books/${id}`);
    if ((await response.data.status) === "200") {
      const updatedBooks = books.filter((book) => {
        return book.id !== id;
      });
      setBooks(updatedBooks);
    }
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    //console.log(response);

    const bookAdded = [...books, response.data];

    setBooks(bookAdded);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onBookDelete={deleteBookById}
        onBookEdit={editBookById}
      />
      <BookCreate onBookCreate={createBook} />
    </div>
  );
}

export default App;
