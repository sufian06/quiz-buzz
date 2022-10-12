import React from "react";
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const datas = useLoaderData().data;
  return (
    <div className="flex justify-center">
      <div className="mt-28 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Line Chart</h2>
        <LineChart width={500} height={400} data={datas}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
};

export default Statistics;
