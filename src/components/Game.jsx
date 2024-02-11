import "./Game.css";
import { React, useState } from "react";
import Timer from "./Timer";

const Game = () => {
  const [inputCode, setInputCode] = useState("");
  const [question, setQuestion] = useState("Q1");

  let students = [];
  let s = "";
  let t = "";
  let str = "";
  let strs = [];
  // "Q1", "["Question","Test Cases", "Answer","Time in Minutes"]"
  const questions = new Map([
    [
      "Q1",
      [
        'Given an array named students, what index is the name "John" in?',
        [
          'students = ["John"]',
          'students = ["Frank","Diana","John"]',
          'students = ["Jhn","John"]',
        ],
        [0, 2, 1],
      ],
    ],
    [
      "Q2",
      [
        "Given two strings s and t, find out if they are equivalent and either return true if they are or false if they are not",
        ['s="Tree";t="tree"', 's="Love";t="Love"', 's="Test";t="Fail"'],
        [false, true, false],
      ],
    ],
    [
      "Q3",
      [
        "Given a string str and a list of strings strs, find out how many strs in the list are permutations of str",
      ],
      [""],
      [""],
    ],
  ]);

  /*
for(let i = 0;i < students.length; i++) {
    if(students[i] === "John") {
        output(i);
    }
}
    */
  const evaluateFunction = () => {
    let answer = "";
    //Outside for function
    const output = (element) => {
      answer = element;
    };
    let text = inputCode;
    for (let i = 0; i < questions.get(question)[1].length; i++) {
      eval(questions.get(question)[1][i]);
      eval(text);
      if (answer !== questions.get(question)[2][i]) {
        console.log("Code is Wrong!");
        return;
      }
    }

    if (question === "Q1") {
      setQuestion("Q2");
    } else if (question === "Q2") {
      setQuestion("Q3");
    }
    console.log("Correct!");
  };

  const handleChange = (event) => {
    setInputCode(event.target.value);
  };

  const time = new Date();
  const timerMinutes = 15;
  time.setMinutes(time.getMinutes() + timerMinutes);
  return (
    <div>
      <div className="textbox">
        <h1 className="center space_font white_text textbox_container">
          {" "}
          {questions.get(question)[0]}{" "}
        </h1>
      </div>
      <div className="timer space_font">
        <Timer expiryTimestamp={time} />
      </div>
      <img className="image center" />
      <textarea
        onChange={(event) => handleChange(event)}
        id="textarea"
        className="center textarea space_font terminal_style autofocus"
        rows="10"
        cols="50"
        spellCheck="false"
      ></textarea>
      <button className="button" onClick={() => evaluateFunction()}>
        {" "}
        Sumbit{" "}
      </button>
    </div>
  );
};

export default Game;
