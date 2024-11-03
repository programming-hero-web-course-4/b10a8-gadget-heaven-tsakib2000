import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/statistic',
          element:<Statistic/>
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        }
      ]
    },
  ]);

 export default router 