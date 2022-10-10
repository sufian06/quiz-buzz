import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <div className="logo">
        <Link to="/">Quiz Buzz</Link>
      </div>
      <div className="navbar">
        <ul className="flex">
          <li>
            <Link to="/topics">
              <Topics />
            </Link>
          </li>
          <li>
            <Link to="/statistics">
              <Statistics />
            </Link>
          </li>
          <li>
            <Link to="/blog">
              <Blog />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
