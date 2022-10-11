import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import Quiz from "../components/Quiz/Quiz";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Topics />,
      },
      {
        path: "/topics",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Topics />,
      },
      {
        path: "/topics/:id",
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
        element: <Quiz />,
      },
      { path: "/statistics", element: <Statistics /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
