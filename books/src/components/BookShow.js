import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onBookDelete, onBookEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteBook = () => {
    onBookDelete(book.id);
  };

  const editBook = () => {
    setShowEdit(!showEdit);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit book={book} onBookEdit={onBookEdit} />;
  }

  return (
    <div className="book-show">
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteBook}></button>
        <button className="edit" onClick={editBook}></button>
      </div>
    </div>
  );
}

export default BookShow;
