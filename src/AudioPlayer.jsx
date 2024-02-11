import React from "react";

const AudioPlayer = () => {
  return (
    <div>
      <audio controls>
        <source src="audio/MainMenuTheme.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
