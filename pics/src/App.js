import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    const response = await searchImages(searchTerm);
    setImages(response);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
