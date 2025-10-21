import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
  {
    path: "/Home",
    element: <div>Home</div>,
  },
  {
    path: "plants,",
    element: <div>Plants</div>,
  },
  {
    path: "my_Profile",
    element: <div>Hello World</div>,
  },
  {
    path: "*",
    element: <div>error</div>,
  },
]);
