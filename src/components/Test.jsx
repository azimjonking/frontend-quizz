// import react
import { useState } from "react";

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

    const correctAnswer = questions[questionIndex].answer
  };

  const handleNextQuestion = () => {};

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
              return (
                <li key={option}>
                  <label className="test-label">
                    <span className="test-letter">A</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => setSelectedAnswer(option)}
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
            <button className="btn test-btn">
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
