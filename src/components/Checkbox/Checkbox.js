import React from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkbox = ({ option, correctAnswer }) => {
    const notify = () => toast.success("Selected ans!");
  return (
    <div>
      <input className="mr-2" type="radio" name="option" id="" onClick={notify} />
      <label htmlFor="option">{option}</label>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Checkbox;
