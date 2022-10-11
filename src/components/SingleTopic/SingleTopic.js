import React from 'react';
import { Link } from 'react-router-dom';

const SingleTopic = ({topic}) => {
    const {name, id} = topic;


    return (
        <div className='border p-3 rounded-md'>
            <img className='bg-slate-100 rounded-md' src={topic.logo} alt="" />
            <div className='flex justify-between items-center mt-4'>
                <h4 className='font-bold text-violet-500'>{name}</h4>
                <button className='bg-violet-500 hover:bg-violet-400 text-slate-100 py-1 px-4 font-semibold rounded-md'>
                    <Link to={`/topics/${id}`}>Start Quiz</Link>
                </button>
            </div>
        </div>
    );
};

export default SingleTopic;