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
import DispayProduct from './Pages/DisplayProducr/DispayProduct';
import UpdateProduct from './Pages/updateProduct/UpdateProduct';
import Card from './Pages/Card/Card';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5001/fashion')
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
        path:'/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path:'/displayproduct',
        element:<DispayProduct></DispayProduct>,
        loader:()=>fetch('http://localhost:5001/fashion')
      },
      {
        path:'/updateproduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader:({params})=>fetch(`http://localhost:5001/fashion/${params.id}`)
      },
      // card part
      {
        path:'/card/:name',
        element:<Card></Card>,
        loader:()=>fetch(`http://localhost:5001/fashion`)
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
