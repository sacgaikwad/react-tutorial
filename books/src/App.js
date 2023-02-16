import { useState } from "react";
import axios from "axios";

import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, title) => {
    console.log("Book to edit");

    const updatedBooks = books.map((book) => {
      if (book.id == id) {
        return { ...book, title: title };
      }
      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });

    //console.log(response);

    const bookAdded = [
      ...books,
      response.data
    ];

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
