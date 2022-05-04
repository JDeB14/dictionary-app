import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <h2>{props.meaning.word}</h2>
        <h6>{props.meaning.phonetic}</h6>{" "}
        <a
          href={`${props.meaning.phonetics[0].audio}`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-volume-high"></i>
        </a>
        <br /> <br />
        {props.meaning.meanings.map(function (array, index) {
          return (
            <div key={index}>
              <h5>{array.partOfSpeech}</h5>
              <p>
                {array.definitions[0].definition}
                <br />
                <br />
                <em>{array.definitions[0].example}</em>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
