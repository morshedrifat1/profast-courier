import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        { index: true, Component: Home }
    ],
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {path:'auth/login',Component:Login},
      {path:'auth/register',Component:Register}
    ]
  }
]);
