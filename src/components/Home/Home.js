import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';

const Home = () => {
    const topicsData = useLoaderData().data;
    return (
        <div className='grid grid-cols-4 max-w-7xl mx-auto mt-16 gap-7'>
         {
            topicsData.map(topic => <Topics key={topic.id} topic={topic} />)
         }
        </div>
    );
};

export default Home;