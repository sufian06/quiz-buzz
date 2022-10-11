import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-blue-300 p-4">
          <h3 className="font-bold mb-2">
            Question 1: what is the purpose of react-router?
          </h3>
          <p>
            ReactJS Router is mainly used for developing Single Page Web
            Applications. React Router is used to define multiple routes in the
            application. When a user types a specific URL into the browser, and
            if this URL path matches any 'route' inside the router file, the
            user will be redirected to that particular route.
          </p>
        </div>
        <div className="bg-violet-300 p-4">
          <h3 className="font-bold mb-2">
            Question 2: How does context api works?
          </h3>
          <p>
            The React Context API is a way for a React app to effectively
            produce global variables that can be passed around. This is the
            alternative to "prop drilling" or moving props from grandparent to
            child to parent
          </p>
        </div>
        <div className="bg-red-300 p-4">
          <h3 className="font-bold mb-2">Question 3: What is useRef?</h3>
          <p>
            The useRef Hook allows you to persist values between renders. It can
            be used to store a mutable value that does not cause a re-render
            when updated. It can be used to access a DOM element directly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
