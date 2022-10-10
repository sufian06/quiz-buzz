import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
const Topics = () => {
  const topicsData = useLoaderData().data;
  console.log(topicsData)
  const {logo, questions} = topicsData;

  return (
    <div>
        <div className="max-w-7xl mx-auto">
            <img className="w-24" src={logo} alt="" />
            {
                questions.map(q => <Question key={q.id} q={q} />)
            }
        </div>
    </div>
  );
};

export default Topics;
