import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import Statistic from "../Pages/Statistic";
import Dashboard from "../Pages/Dashboard";
import Cards from "../Components/Cards";
import Details from "../Pages/Details";
import ReviewPage from "../Pages/ReviewPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>,
            loader:()=>fetch('/categories.json'),
            children:[
              {
                path:'/',
                element:<Cards/>,
                loader:()=>fetch('../gadgets.json')
              },
              {
                path:'/category/:categoryID',
                element:<Cards/>,
                loader:()=>fetch('../gadgets.json')
              }

            ]
            
        },
        {
          path:'/statistic',
          element:<Statistic/>,
          loader:()=>fetch('/gadgets.json')
        },
        {
          path:'/dashboard',
          element:<Dashboard/>
        },
        {
          path:'/details/:id',
          element:<Details/>,
          loader:()=>fetch('/gadgets.json')
        },
        {
          path:'/reviews',
          element:<ReviewPage/>,
         
        }
      ]
    },
  ]);

 export default router 