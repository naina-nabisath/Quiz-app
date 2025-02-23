import React from "react";

const Home = ({ setQuizState }) => {
  return (
    <div className="home text-center d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="mb-4">Welcome to the Quiz App!</h1>
      <button className="btn btn-primary btn-lg" onClick={() => setQuizState("quiz")}>
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
