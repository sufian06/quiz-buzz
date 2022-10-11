import React from "react";
import Checkbox from "../Checkbox/Checkbox";

const SingleQuiz = ({ quiz }) => {
  const { question, options } = quiz;
  return (
    <div className="border p-5 mb-3">
      <div className="font-bold mb-4">Question: {question}</div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option, idx) => (
          <Checkbox key={idx} option={option} />
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
