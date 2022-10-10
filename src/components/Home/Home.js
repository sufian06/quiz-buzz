import React from "react";
import { useLoaderData } from "react-router-dom";
import AllQuiz from "../AllQuiz/AllQuiz";

const Home = () => {
  const allQuiz = useLoaderData();
  const allQuizData = allQuiz.data;
  console.log(allQuiz.data);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {allQuizData.map((quiz) => (
          <AllQuiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Home;
