import { React } from "react";
import Timer from "./Timer";
const Game = () => {
  const time = new Date();
  const timerMinutes = 1;
  time.setMinutes(time.getMinutes() + timerMinutes);
  return (
    <div>
      <h1 className="center space_font"> Prompt Text! </h1>
      <Timer expiryTimestamp={time} />
      <img className="image center" />
      <textarea
        className="center textarea space_font terminal_style autofocus"
        rows="10"
        cols="50"
      ></textarea>
    </div>
  );
};

export default Game;
