import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";
import { NameContext } from "../SingleTopic/SingleTopic";

const Quiz = () => {
  const quizes = useLoaderData().data.questions;
  const name = useContext(NameContext);
  console.log(name)
  return (
    <div className="mt-28">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="my-10 text-center font-bold text-4xl">Quiz of</h2>
        {quizes.map((quiz) => (
          <SingleQuiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
