import BookEdit from "./BookEdit";
import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const{deleteBookById} = useBooksContext();

  const handleDeleteBook = () => {
    deleteBookById(book.id);
  };

  const editBook = () => {
    setShowEdit(!showEdit);
  };

  const onHandleSubmit=()=>{
    setShowEdit(false);
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
