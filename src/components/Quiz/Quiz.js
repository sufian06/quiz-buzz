import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const Quiz = () => {
  const quizes = useLoaderData().data;
  const {name, questions} = quizes;
  return (
    <div className="mt-28">
      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="my-10 text-center font-bold text-4xl">Quiz of: {name}</h2>
        {questions.map((quiz) => (
          <SingleQuiz key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quiz;
