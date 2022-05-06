import React, { useState } from "react";
import axios from "axios";
import Meanings from "./Meanings";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [meaning, setMeaning] = useState(null);

  function showResponse(response) {
    setMeaning(response.data[0]);
  }

  function showPhotos(response) {
    console.log(response.data);
  }
  function searchWord(event) {
    event.preventDefault();

    //https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);

    let pexelApiKey =
      "563492ad6f91700001000001e59be451fbd64c43b10b8b22597744f6";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    const header = { Authorization: `Bearer ${pexelApiKey}` };
    axios.get(pexelApiUrl, { headers: header }).then(showPhotos);
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
            placeholder="Search for a word"
            autoFocus={true}
            onChange={updateKeyword}
          />
        </form>
        <div className="hint">i.e. wine, hug, plant, yoga</div>
      </section>
      <Meanings meaning={meaning} />
      <Photos />
    </div>
  );
}
