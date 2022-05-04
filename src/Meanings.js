import React from "react";
import Phonetic from "./Phonetic";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <h2>{props.meaning.word}</h2>
        <h6>{props.meaning.phonetic}</h6>
        <Phonetic audio={props.meaning.phonetics[0].audio} />
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
