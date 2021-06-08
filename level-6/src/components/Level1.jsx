import "./Level1.css";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const initialStae = {
  class1: "answer",
  class2: "answer",
  class3: "answer",
  class4: "answer",
};

const Level = (props) => {
  // const [id, setId] = useState("0");
  // const [correctAnswer, setCorrectAnswer] = useState("true");
  // function updateId() {
  //   setId(id + 1);
  //   console.log(id);
  //   console.log("inside the setId function");
  // }
  // useEffect(updateId, [id]);

  // const questionsAnswer = [
  //   {
  //     question1: "Do you have any idea what comes next in this sequence?",
  //     question1Part2: "4, 9, 16, 25, ?",
  //     answeer: "36",
  //     button1: "36",
  //     button2: "30",
  //     button3: "18",
  //     button4: "2",
  //   },

  //   {
  //     question2: "sample text for question 2",
  //     question2Part2: "sample part 2 of question 2",
  //     answeer: "5",
  //     button1: "2",
  //     button2: "3",
  //     button3: "4",
  //     button4: "5",
  //   },
  // ];

  const [classButton, setClassButton] = useState(initialStae);
  const [typeComplete, setTypeComplete] = useState(false);
  return (
    <div className="level1">
      <section className="question">
        <section className="Type-text">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "To unlock the door you must get code which is there in the sequence."
                )
                .callFunction(() => {
                  // alert("nothing special");
                  setTypeComplete(true);
                })
                .start();
            }}
          />
        </section>
        {typeComplete ? (
          <div>
            <h2>"Do you have any idea what comes next in this sequence?"</h2>
            <h3>4, 9, 16, 25, ?</h3>
          </div>
        ) : null}
      </section>
      <div>
        <button
          className="buttons"
          onClick={() => {
            let newClass = { ...initialStae };
            if (classButton.class1 === "answer") {
              newClass.class1 = "right-answer";
            } else if (classButton.class1 === "right-answer") {
              newClass.class1 = "answer";
            }

            setClassButton(newClass);
          }}
        >
          36
        </button>
        <button
          className="buttons"
          onClick={() => {
            let newClass = { ...initialStae };
            if (classButton.class2 === "answer") {
              newClass.class2 = "else";
            } else if (classButton.class2 === "else") {
              newClass.class2 = "answer";
            }

            setClassButton(newClass);
          }}
        >
          30
        </button>
        <button
          className="buttons"
          onClick={() => {
            let newClass = { ...initialStae };
            if (classButton.class3 === "answer") {
              newClass.class3 = "else";
            } else if (classButton.class3 === "else") {
              newClass.class3 = "answer";
            }

            setClassButton(newClass);
          }}
        >
          18
        </button>
        <button
          className="buttons"
          onClick={() => {
            let newClass = { ...initialStae };
            if (classButton.class4 === "answer") {
              newClass.class4 = "else";
            } else if (classButton.class4 === "else") {
              newClass.class4 = "answer";
            }

            setClassButton(newClass);
          }}
        >
          2
        </button>
      </div>

      <div className={classButton.class1}>
        <p className="jawab">
          Woww!! This was quick, You have unlocked the door, but you are not
          fully done yet. :)
        </p>
        <Link to="/level2">
          <button className="answer-button">
            Try Password to Start the Engine
          </button>
        </Link>
      </div>
      <div className={classButton.class2}>
        <p className="jawab">
          You are thinking in the right direction but the answer is not right
        </p>
      </div>
      <div className={classButton.class3}>
        <p className="jawab">
          Think of a bigger number and remember you have limited number of
          choices
        </p>
      </div>
      <div className={classButton.class4}>
        <p className="jawab">
          This is nothing less than a surprise. How can you even think that the
          answer can be 2. I am looking to lock you on this plannet for next
          2000 years. //Alien is Super Angry
        </p>
      </div>
    </div>
  );
};

export default Level;
