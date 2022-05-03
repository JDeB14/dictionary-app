import React from "react";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <h2>{props.meaning.word}</h2>
        <h6>{props.meaning.phonetic}</h6>
        <a href="{props.meaning.phonetics[0].audio}">Pronounce</a>
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
