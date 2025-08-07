



import { createBrowserRouter } from "react-router";
import Main from "../Layout/Main";
import Home from "../Pages/Home";


export const routers = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element:<Home></Home>
        },

      
    

   
    ]
 }


]);