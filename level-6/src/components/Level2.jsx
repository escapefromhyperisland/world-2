import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import "./level2.css";

// const initialStae = {
//   class1: "answer",
//   class2: "answer",
//   class3: "answer",
//   class4: "answer",
// };

const Level2 = () => {
  const [classButton, setClassButton] = useState("false");
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue((previousValue) => e.target.value);
    console.log(inputValue);
  };

  function handleClick() {
    console.log(inputValue);
    if (inputValue === "72779673") {
      setClassButton("true");
      console.log(classButton);
    } else {
      setClassButton("false");
      console.log(classButton);
    }
  }

  // function handleKeypress(e) {
  //   console.log("keypress");
  //   if (e.keyCode === 13) {
  //     console.log("enter pressed");
  //     handleClick();
  //   }
  // }
  return (
    <div className="level2">
      <section className="question">
        <h1>To start the engine you have to enter the right password:</h1>
        <h3>
          If you have used the old phone with the numeric keyboard, you can find
          the number which is hidden in the word "PASSWORD"
        </h3>
      </section>
      <div className="answerInput">
        <input
          className="password"
          id="password"
          onChange={handleChange}
          // onKeyPress={handleKeypress}
          value={inputValue}
          type="number"
          placeholder="Enter your password"
        ></input>
      </div>
      <button
        className="password-button"
        type="submit"
        id="myBtn"
        onClick={handleClick}
      >
        Submit
      </button>
      <section>
        <h1 className={classButton}>You have entered the right answer</h1>
      </section>
    </div>
  );
};

export default Level2;
