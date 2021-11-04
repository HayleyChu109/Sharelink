import "../App.css";
import React, { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const searchLink = (event) => {
    let newSearch = event.target.value;
    setSearch(newSearch);
    props.searchHandler(newSearch);
  };

  return (
    <div>
      <h2 className="searchTitle">Search for: {search}</h2>
      <input
        type="search"
        value={search}
        onChange={(event) => {
          searchLink(event);
        }}
        className="searchBar"
      />
    </div>
  );
}
