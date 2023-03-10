import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate() {
  const { createBook } = useBooksContext();
  const [title, setBookTitle] = useState("");

  const handleBookCreate = (event) => {
    //console.log(event.target.value);
    setBookTitle(event.target.value);
  };

  const handleBookCreateSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setBookTitle("");
  };

  return (
    <div className="book-create">
      <form onSubmit={handleBookCreateSubmit}>
        <label>Title</label>
        <div>
          <input
            className="input"
            id="txtBookCreate"
            value={title}
            onChange={handleBookCreate}
          />
          <button className="button">Create Book</button>
        </div>
      </form>
    </div>
  );
}

export default BookCreate;
