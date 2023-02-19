import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const {editBookById} = useContext(BooksContext);

  const submitEditBook = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={submitEditBook}>
        {/* {count} */}
        <label>Title</label>
        <input className="input" value={title} onChange={onInputChange}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
