import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleTopic from "../SingleTopic/SingleTopic";

const Topics = () => {
  const topics = useLoaderData().data;
  // console.log(topics);
  return (
    <div className="max-w-7xl mx-auto mt-28">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {topics.map((topic) => (
          <SingleTopic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
