import { React, useState } from 'react';
import Timer from './Timer';
const Game = () => {
    const [inputCode, setInputCode] = useState("");
    const [question, setQuestion] = useState("Q1");
    const students = ["John"]
    // "Q1", "["Question","Test Cases", "Answer","Time in Minutes"]"
    const questions = new Map([
        ["Q1", ['Given an array named students, what index is the name "John" in?', ['let students = ["John"]', 'let students = ["Frank","Diana","John"]','let students = ["Jhn","John"]'], [0,2,1], 3]],
        ["Q2", []]
    ])

    const evaluateFunction = () => {
        let answer = "";
        const output = (element) => {
            answer = element;
        }
        let text = inputCode;
        for(let i = 0;i < questions.get(question)[1].length; i++) {
            eval(questions.get(question)[1][i]);
            eval(text);
            if(answer !== questions.get(question)[2][i]) {
                console.log("Wrong!");
                console.log(answer);
                console.log(questions.get(question)[2][i]);
                console.log(`Number: ${i}`)
                return;
            }
        }
        console.log("Correct!");
    }

    const handleChange = (event) => {
        setInputCode(event.target.value);
    }

    const time = new Date();
    const timerMinutes = questions.get(question)[3];
    time.setMinutes(time.getMinutes() + timerMinutes);
    return (
        <div>
            <div className="textbox">
                <h1 className="center space_font white_text textbox_container"> {questions.get(question)[0]} </h1>
            </div>
            <div className="timer space_font">
                <Timer expiryTimestamp={time} />
            </div>
            <img className="image center" />
            <textarea onChange={(event) => handleChange(event)} id="textarea" className="center textarea space_font terminal_style autofocus" rows="10" cols="50" spellCheck="false"></textarea>
            <button onClick={() => evaluateFunction()}> Eval Function </button>
        </div>
    );
}
 
export default Game;
