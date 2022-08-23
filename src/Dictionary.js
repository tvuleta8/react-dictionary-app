import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>Dictionary</h2>
      <br />
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
      <br />
      <Results results={results} />
    </div>
  );
}
