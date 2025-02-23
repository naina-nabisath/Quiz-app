import React, { useState } from "react";

const Quiz = ({ questions, setQuizState, setScore }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = questions[currentQuestionIndex];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.correct_answer) {
      setScore((prev) => prev + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizState("results");
    }
  };

  return (
    <div className="quiz container py-5">
      <h2 className="mb-4">
        Question {currentQuestionIndex + 1} of {questions.length}
      </h2>
      <p className="mb-4">{currentQuestion.question}</p>
      <div className="row">
        {options.map((option, index) => (
          <div key={index} className="col-12 col-md-6 mb-3">
            <button
              className={`btn btn-outline-primary w-100 ${
                selectedAnswer === option ? "active" : ""
              }`}
              onClick={() => setSelectedAnswer(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
      <button
        className="btn btn-success mt-4"
        onClick={handleNext}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default Quiz;
