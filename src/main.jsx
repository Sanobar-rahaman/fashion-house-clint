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

import PrivateRoute from './Routes/PrivateRoute';
import AddToCart from './Pages/AddtoCart/AddToCart';
import MyData from './Pages/MyData/MyData';

const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=>fetch('/fashion.json')
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
        path:'/displayproduct/:brand',
        element:<DispayProduct></DispayProduct>,
        // http://localhost:5001
        loader:({params})=>fetch(`https://fashion-server-five.vercel.app/fashionbrand/${params.brand}`)
      },
      {
        path:'/updateproduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader:({params})=>fetch(`https://fashion-server-five.vercel.app/fashion/${params.id}`)
      },
      {
        path:'/mydata',
        element: <MyData></MyData>
      },
      // card part
     
      {
        path:'/addtocart',
        element: <AddToCart></AddToCart>,
        loader:()=> fetch('https://fashion-server-five.vercel.app/cart')
        
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
