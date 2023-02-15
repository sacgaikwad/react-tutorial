import { useState } from "react";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const bookAdded = [
      ...books,
      { id: Math.round(Math.random() * 99), title: title },
    ];

    setBooks(bookAdded);
  };

  return (
    <div className="app">
      <BookList books={books} onBookDelete={deleteBookById} />
      <BookCreate onBookCreate={createBook} />
      
    </div>
  );
}

export default App;
