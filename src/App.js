import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Topics from "./components/Topics/Topics";
import Main from "./layouts/Main";

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main />, children: [
      {path: '/home', element: <Home />},
      {path: '/topics', element: <Topics />},
      {path: '/statistics', element: <Statistics />},
      {path: '/blog', element: <Blog />},
    ]}
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
