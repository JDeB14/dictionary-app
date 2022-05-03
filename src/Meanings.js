import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    console.log(props.meaning.meanings);
    return (
      <div className="Meanings">
        <h2>{props.meaning.word}</h2>
        <h5>{props.meaning.phonetic}</h5>
        {props.meaning.meanings.map(function (array, index) {
          return (
            <div key={index}>
              <h3>{array.partOfSpeech}</h3>
              <p>{array.definitions[0].definition}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
