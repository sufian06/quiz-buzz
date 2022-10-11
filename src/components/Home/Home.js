import React from "react";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mt-12">
          <div>
          <h2 className="text-3xl font-bold mb-4">Quiz Buzz is a quiz app.</h2>
          <p className="font-semibold">Whether you need to create an online quiz app for your classroom or just for fun, <br /> get started with us</p>
          </div>
          <img className=""
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <Topics />
    </div>
  );
};

export default Home;
