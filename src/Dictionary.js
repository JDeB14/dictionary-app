import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [meaning, setMeaning] = useState(null);

  function showResponse(response) {
    setMeaning(response.data[0]);
  }
  function searchWord(event) {
    event.preventDefault();

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }

  function updateKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={searchWord}>
          <input
            type="search"
            placeholder="Search for a word..."
            autoFocus={true}
            onChange={updateKeyword}
          />
        </form>
        <div className="hint">i.e. wine, hug, plant, yoga</div>
      </section>
      <Meanings meaning={meaning} />
    </div>
  );
}
