import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkbox = ({ option, correctAnswer }) => {
  const handleCorrectAnswer = () => {
    if (option === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast("Answer is not Correct");
    }
  };
  return (
    <div>
      <input
        className="mr-2"
        type="radio"
        name="option"
        id=""
        onClick={handleCorrectAnswer}
      />
      <label htmlFor="option">{option}</label>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Checkbox;
