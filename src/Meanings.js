import React from "react";
import Phonetic from "./Phonetic";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  if (props.meaning) {
    return (
      <div className="Meanings">
        <section>
          <h2>{props.meaning.word}</h2>
          <h6>{props.meaning.phonetic}</h6>
          <Phonetic audio={props.meaning.phonetics[0].audio} />
        </section>
        {props.meaning.meanings.map(function (array, index) {
          return (
            <section key={index}>
              <h5>{array.partOfSpeech}</h5>
              <div>
                <div className="definition">
                  {array.definitions[0].definition}
                </div>
                <div className="example">{array.definitions[0].example} </div>
              </div>
              <Synonyms synonyms={array.synonyms} />
            </section>
          );
        })}
      </div>
    );
  }
}
