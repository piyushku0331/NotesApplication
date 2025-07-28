import React from "react";
import Home from "./Home";
import Blog from "./Blog";
import Contact from "./Contact";
import About from "./About";
import PageNotFound from "./PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}