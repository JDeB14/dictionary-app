import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.audio) {
    return (
      <div className="Phonetic">
        <ReactAudioPlayer
          src={`${props.audio}`}
          autoPlay={false}
          controls
          className="audio"
        />
      </div>
    );
  } else {
    return null;
  }
}
