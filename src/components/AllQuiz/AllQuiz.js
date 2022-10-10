import React from "react";

const AllQuiz = ({ quiz }) => {
    const {logo, name} = quiz;
  return (
    <div className="">
      <div className="border">
        <img src={logo} alt="" />
        <h4>{name}</h4>
      </div>
    </div>
  );
};

export default AllQuiz;
