import React from "react";

const Results = ({ score }) => {
  return (
    <div className="results text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Quiz Completed!</h1>
      <p className="fs-4">Your Score: {score}</p>
      <button className="btn btn-primary btn-lg" onClick={() => window.location.reload()}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
