import React, { createContext } from "react";
import { Link } from "react-router-dom";

export const NameContext = createContext();

const SingleTopic = ({ topic }) => {
  const { name, id, total, logo } = topic;

  return (
    <div className="">
      <div className="border p-3 rounded-md">
        <img
          className="bg-slate-100 rounded-md w-full"
          src={logo}
          alt=""
        />
        <div className="flex justify-between items-center mt-12">
          <div>
            <h4 className="font-bold text-violet-500">{name}</h4>
            <h3 className="font-semibold">Total Quiz: {total}</h3>
          </div>
          <button className="bg-violet-500 hover:bg-violet-400 text-slate-100 py-1 px-4 font-semibold rounded-md">
            <Link to={`/topics/${id}`}>Start Quiz</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleTopic;
