import { useState } from "react";

function BookEdit({ book }) {
  const [title, setTitle] = useState(book.title);

  const handleEditBook = (event) => {
    event.preventDefault();
    console.log("handleEditBook");
  };

  const onInputChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleEditBook}>
        <label>Title</label>
        <input className="input" value={title} onChange={onInputChange}></input>
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
}

export default BookEdit;
