import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className='shadow-lg'>
            <div className='flex justify-between max-w-7xl mx-auto h-14 items-center'>
            <div className="logo text-2xl font-semibold">
                <Link to='/'>Quiz Buzz</Link>
            </div>
            <nav>
                <ul>
                    {/* <Link className='ml-6 font-semibold' to='/'>Home</Link> */}
                    <Link className='ml-6 font-semibold' to='/topics'>Topics</Link>
                    <Link className='ml-6 font-semibold' to='/statistics'>Statistics</Link>
                    <Link className='ml-6 font-semibold' to='/blog'>Blog</Link>
                </ul>
            </nav>
        </div>
        </div>
    );
};

export default Nav;