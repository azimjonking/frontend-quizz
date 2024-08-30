// import react
import { useState } from "react";

// components
import Result from "./Result";

// toast
import toast from "react-hot-toast";

const Test = ({ questions: { color, icon, questions, title } }) => {
  const [asnweredQuestions, setAsnweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  console.log(selectedAnswer);

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctAnswer = questions[questionIndex].answer;

    if (selectedAnswer == null) {
      toast.error("Please, select an answer");
    } else {
      if (selectedAnswer == correctAnswer) {
        setAnswerStatus("correct");
        setCorrectAnswerCount(correctAnswerCount + 1);
      } else {
        setAnswerStatus("incorrect");
      }
      setShowNextButton(true);
      setStatusDisabled(true);
    }
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAsnweredQuestions(asnweredQuestions + 1);
    setSelectedAnswer(null);
    setShowNextButton(false);
    setAnswerStatus(null);
    setStatusDisabled(false);
  };

  if (questionIndex === questions.length) {
    toast.success("Congratulations", {
      icon: "🎉",
    });
    return (
      <Result
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        questions={questions}
      />
    );
  }

  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          Question {asnweredQuestions} of {questions.length}
        </p>
        <h2 className="test-title">{questions[questionIndex].question}</h2>

        <div className="test-proccess-container">
          <div
            className="test-proccess"
            style={{
              width: (asnweredQuestions / questions.length) * 100 + "%",
            }}
          ></div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit}>
          <ul className="test-list">
            {questions[questionIndex].options.map((option, index) => {
              const alphabet = String.fromCharCode(65 + index);

              let className = "";

              if (answerStatus == "correct" && option == selectedAnswer) {
                className = "correct";
              } else if (answerStatus == "incorrect") {
                if (option == selectedAnswer) {
                  className = "incorrect";
                }

                if (option == questions[questionIndex].answer) {
                  className = "correct";
                }
              }
              return (
                <li key={option}>
                  <label className={`test-label ${className}`}>
                    <span className="test-letter">{alphabet}</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => setSelectedAnswer(option)}
                      disabled={statusDisabled}
                    />
                    <span className="test-text">{option}</span>

                    {/* icon */}
                    <img
                      className="test-icon-correct"
                      src="../assets/icon-correct.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                    <img
                      className="test-icon-incorrect"
                      src="../assets/icon-incorrect.svg"
                      alt="icon"
                      width={40}
                      height={40}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          {!showNextButton && (
            <button className="btn test-btn">Submit Question</button>
          )}
          {showNextButton && (
            <button className="btn test-btn" onClick={handleNextQuestion}>
              {questions.length == asnweredQuestions
                ? "Finish"
                : "Next Question"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Test;
