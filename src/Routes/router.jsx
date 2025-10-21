import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import Plants from "../Pages/Plants";
import MyProfile from "../Pages/MyProfile";
import HomeLayout from "../layOuts/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Loading from "../Components/Loading";

import AuthLayout from "../layOuts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loading></Loading>,
    children:[
              {
                 index: true,
    path: "/",
    Component: HomePage
  },
         {
    path: "/plants",
    Component: Plants
  },
  {
    path: "/my_Profile",
    element: <MyProfile></MyProfile>
  },

    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [{
        index: true,
        path:"/auth",
        element:<Login></Login>
    },
  {
        path:"/auth/register",
        element:<Register></Register>
    },
      
    ],
  },
  {
     path: "/*",
    element: <ErrorPage></ErrorPage>
  },
]);
