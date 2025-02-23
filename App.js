import React, { useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [quizState, setQuizState] = useState("home"); 
  const [score, setScore] = useState(0);

  const allQuestions = [
    {
      question: "C is a",
      correct_answer: "high level language with some low level features",
      incorrect_answers: [
        "high level language",
        "low level language",
        "low level language with some high level features",
      ],
    },
    {
      question: "Which of the following is not a keyword in C?",
      correct_answer: "IF",
      incorrect_answers: ["printf", "main", "none of the above"],
    },
    {
      question: "Any C program",
      correct_answer: "must contain at least one function",
      incorrect_answers: [
        "need not contain any function",
        "needs input data",
        "none of the above",
      ],
    },
    {
      question: "In C preprocessing is typically done",
      correct_answer: "either before or at the beginning of the compilation process",
      incorrect_answers: [
        "after compilation but before execution",
        "after loading",
        "none of the above",
      ],
    },
    {
      question: "Preorder is same as",
      correct_answer: "depth_first order",
      incorrect_answers: ["post-order", "in-order", "none of the above"],
    },
    {
      question: "The number of possible binary search trees with 3 nodes",
      correct_answer: "5",
      incorrect_answers: ["12", "13", "15"],
    },
    {
      question: "Sorting is useful for",
      correct_answer: "all of the above",
      incorrect_answers: [
        "report generation",
        "minimizing the storage needed and responding to queries easily",
        "making searching easier and efficient",
      ],
    },
    {
      question: "You are asked to sort 15 randomly generated numbers. You should prefer",
      correct_answer: "Insertion sort",
      incorrect_answers: ["bubble sort", "selection sort", "heap sort"],
    },
    {
      question: "Which normal form is considered adequate for relational database design",
      correct_answer: "3 NF",
      incorrect_answers: ["2 NF", "4 NF", "BCNF"],
    },
    {
      question: "The column of a table is referred to as the",
      correct_answer: "attribute",
      incorrect_answers: ["tuple", "entity", "degree"],
    },
    {
      question: "The data flow model of an application mainly shows",
      correct_answer: "processing requirements and the flow of data",
      incorrect_answers: [
        "the underlying data and the relationship among them",
        "decision and control information",
        "communication network structure",
      ],
    },
  ];

  const shuffleArray = (array) =>{
    return array.sort(() => Math.random() -  0.5);
  }

  const questions = shuffleArray(allQuestions).slice(0, 10);

  return (
    <div className="App">
      {quizState === "home" && <Home setQuizState={setQuizState} />}
      {quizState === "quiz" && (
        <Quiz
          setQuizState={setQuizState}
          questions={questions}
          setScore={setScore}
        />
      )}
      {quizState === "results" && <Results score={score} />}
    </div>
  );
};

export default App;
