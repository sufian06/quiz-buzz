import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Home from "../components/Home/Home";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {path: '/', element:<Main />, children: [
        {path: '/', loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),element: <Home />},
        {path: '/home', element: <Home />},
        {path: '/topics', loader: async () => fetch(`https://openapi.programming-hero.com/api/quiz/1`), element: <Topics />},
        {path: '/statistics', element: <Statistics />},
        {path: '/blog', element: <Blog />},
    ]}
])