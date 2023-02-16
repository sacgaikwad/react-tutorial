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

  const onHandleSubmit=(id,title)=>{
    setShowEdit(false);
    onBookEdit(id,title);
  };

  let content = <h3>{book.title}</h3>;

  if (showEdit) {
    content = <BookEdit  book={book} onSubmit={onHandleSubmit}/>;
  }

  return (
    <div className="book-show">
      <img src="https://picsum.photos/seed/picsum/200/300" alt="books"/>
      <div>{content}</div>
      <div className="actions">
        <button className="delete" onClick={handleDeleteBook}></button>
        <button className="edit" onClick={editBook}></button>
      </div>
    </div>
  );
}

export default BookShow;
