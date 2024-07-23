import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import "./global.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

const router =createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/signup",
        element: <Signup/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"*",
        element:<h1>Not Found</h1>
    }
]);

root.render(<RouterProvider router={router}/>);


