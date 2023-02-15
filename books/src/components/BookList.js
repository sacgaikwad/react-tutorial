import BookShow from "./BookShow";

function BookList({ books, onBookDelete, onBookEdit }) {
  console.log("book list", books);

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
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
