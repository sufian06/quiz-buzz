import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import Chart from '../Chart/Chart';

const Statistics = () => {
    const datas = useLoaderData().data;
    console.log(datas)
    return (
        <div>
            <div className='mt-28 max-w-7xl mx-auto'>
            {/* {
                datas.map(data => <Chart key={data.id} data={data} />)
            } */}
        </div>
        </div>
    );
};

export default Statistics;