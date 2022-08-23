import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
    console.log(keyword);
  }

  return (
    <div className="Dictionary">
      <div className="Search row">
        <form onSubmit={search}>
          <input
            type="text"
            className="col-8 word-search"
            placeholder="Search for a word"
            autoComplete="off"
            onChange={handleKeywordChange}
          />
          <input type="submit" value="Search" className="col-2 search-button" />
        </form>
      </div>
    </div>
  );
}
