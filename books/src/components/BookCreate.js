import { useState } from "react";

function BookCreate({ onBookCreate }) {
  const [title, setBookTitle] = useState("");

  const handleBookCreate = (event) => {
    //console.log(event.target.value);
    setBookTitle(event.target.value);
  };

  const handleBookCreateSubmit = (event) => {
    event.preventDefault();
    onBookCreate(title);
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
