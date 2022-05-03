import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  function searchWord(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder="Search for a word.."
          autoFocus={true}
          onChange={updateKeyword}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
