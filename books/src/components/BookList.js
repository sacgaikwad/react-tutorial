import BookShow from "./BookShow";

function BookList({ books,onBookDelete }) {
  console.log("book list", books);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book}  onBookDelete={onBookDelete} />;
  });
  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
