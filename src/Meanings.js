import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <h2>{props.meaning.word}</h2>
        <h5>{props.meaning.phonetic}</h5>
        {props.meaning.meanings.map(function (partOfSpeech, index) {
          return (
            <div key={index}>
              <h3>{partOfSpeech.partOfSpeech}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}
