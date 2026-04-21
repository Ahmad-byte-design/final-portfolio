import App from "@/App";

import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";


const Home = lazy(()=>import("@/pages/Home"));
const Projects = lazy(()=>import("@/pages/Projects"));
const Services = lazy(()=>import("@/pages/Services"));
const Histories = lazy(()=>import("@/pages/Histories"));
const Certificates = lazy(()=>import("@/pages/Certificates"));


export const router = createBrowserRouter([  
    {path:"/" ,element: <App /> ,children:[
        {index:true ,element:<Home />},
        {path:"/services",element:<Services />},
        {path:"/projects",element:<Projects />},
        {path:"/certificates",element:<Certificates />},
        {path:"/histories",element:<Histories />},
    ]},

])