import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Chart = ({data}) => {
    const {name, total} = data;
    return (
        <div className=''>
            <p>name: {name}, value: {total}</p>

        <PieChart width={400} height={400}>
          <Pie
            data={name}
            cx="50%"
            cy="50%"
            labelLine={false}
            // label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            
          </Pie>
          <Tooltip />
        </PieChart>
            
        </div>
    );
};

export default Chart;