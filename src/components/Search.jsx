import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.png" alt="Search-Icon" />
        <input
          type="text"
          placeholder="search thorugh thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        i
      </div>
    </div>
  );
};

export default Search;
