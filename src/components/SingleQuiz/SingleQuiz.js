import { EyeIcon } from '@heroicons/react/24/solid';
import React from "react";
import Checkbox from "../Checkbox/Checkbox";

const SingleQuiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  return (
    <div className="border p-5 mb-3">
      <div className='flex justify-between'>
      <div className="font-bold mb-4">Question: {question}</div>
      <button><EyeIcon className="h-6 w-6 text-slate-500"/></button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <Checkbox key={idx} option={option} />
        ))}
      </div>
      <p>{correctAnswer}</p>
    </div>
  );
};

export default SingleQuiz;
