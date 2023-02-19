import BookShow from "./BookShow";
import { useContext } from "react";
import BooksContext from "../context/books";

function BookList({ books, onBookDelete, onBookEdit }) {
  //console.log("book list", books);

  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onBookDelete={onBookDelete}
        onBookEdit={onBookEdit}
      />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>click</button>
      {renderedBooks}
    </div>
  );
}

export default BookList;
