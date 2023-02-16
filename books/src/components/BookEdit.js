import { useState } from "react";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const submitEditBook = (event) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={submitEditBook}>
        <label>Title</label>
        <input className="input" value={title} onChange={onInputChange}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
