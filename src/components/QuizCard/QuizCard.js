import React from "react";

const QuizCard = ({ topic }) => {
  const { logo, name } = topic;
  return (
    <div>
      <div className="border p-4 rounded-md">
        <img className="bg-slate-200 rounded" src={logo} alt="" />
        <div className="flex justify-between items-center mt-6">
          <h4 className="font-bold text-violet-500">{name}</h4>
          <button className="bg-violet-400 py-1 px-3 rounded-md font-semibold text-slate-100">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
