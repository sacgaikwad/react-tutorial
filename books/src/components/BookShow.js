import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onBookDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBook = () => {
    onBookDelete(book.id);
  };

  const handleEditBook = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteBook}></button>
        <button className="edit" onClick={handleEditBook}></button>
      </div>
    </div>
  );
}

export default BookShow;
