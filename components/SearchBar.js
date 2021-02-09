import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  function handleTermChange(e) {
    setSearchTerm(e.target.value);
    onSearch(searchTerm);
  }

  return (
    <div className="SearchBar">
      <input
        onChange={handleTermChange}
        placeholder="Enter A Song, Album, or Artist"
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
};

export default SearchBar;
