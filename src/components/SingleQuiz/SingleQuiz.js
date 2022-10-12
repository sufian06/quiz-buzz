import { EyeIcon } from "@heroicons/react/24/solid";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkbox from "../Checkbox/Checkbox";

const SingleQuiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;

  const handleCheckAnswer = () => {
    toast(`Correct Ans: ${correctAnswer}`);
  };

  return (
    <div className="border rounded-md p-5 mb-6">
      <div className="flex justify-between bg-violet-200 p-4 mb-4 rounded-md">
        <div className="font-bold mb-4">Question: {question}</div>
        <button onClick={handleCheckAnswer}>
          <EyeIcon className="h-6 w-6 text-slate-600" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <Checkbox key={idx} option={option} correctAnswer={correctAnswer} />
        ))}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default SingleQuiz;
