import { useState } from "react";
import './searchBar.css'

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSumit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm);
  };

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div className="search-bar">
      <form onSubmit={onFormSumit}>
        <label>Enter Search Term:</label>
        <input value={searchTerm} onChange={onInputChange} />
      </form>
    </div>
  );
}

export default SearchBar;
