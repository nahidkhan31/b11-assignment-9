import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authintication Layout</h2>,
  },
  {
    path: "/box",
    element: <h2>Box Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
