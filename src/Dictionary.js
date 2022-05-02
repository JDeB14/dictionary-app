import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Dictionary">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a word.."
          autoFocus={true}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
