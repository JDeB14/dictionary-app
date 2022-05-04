import React from "react";

export default function Phonetic(props) {
  if (props.audio) {
    return (
      <div className="Phonetic">
        <a href={`${props.audio}`} target="_blank" rel="noreferrer">
          <i className="fa-solid fa-volume-high"></i>
        </a>
      </div>
    );
  } else {
    return null;
  }
}
