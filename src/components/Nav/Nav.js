import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const Nav = () => {
  return (
    <div className="shadow-lg">
      <nav className="flex justify-between items-center h-16 max-w-7xl mx-auto">
        <div className="logo text-2xl font-semibold inline-block">
          <Link to="/">Quiz Buzz</Link>
        </div>
        <div className="navbar">
          <ul className="flex">
            <li className="font-semibold inline-block">
              <Link to="/topics">
                <Topics />
              </Link>
            </li>
            <li className="font-semibold inline-block ml-4">
              <Link to="/statistics">
                <Statistics />
              </Link>
            </li>
            <li className="font-semibold inline-block ml-4">
              <Link to="/blog">
                <Blog />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
