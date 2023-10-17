import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Register from './Pages/Register/Register';
import AuthProvider from './ContexApiAuth/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/login',
        element:<LogIn></LogIn>

      },
      {
        path:'/register',
        element: <Register></Register>
      },
      //login route done 
      {
        path:'addproduct',
        element: <AddProduct></AddProduct>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
