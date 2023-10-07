import { useState } from 'react'
import { createBrowserRouter,RouterProvider,Route,Outlet, Navigate } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mood from './pages/Mood';
import Products from "./pages/Products"
import Shop from './pages/Shop';
import Login from './pages/Login';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import About from './pages/About';


function App() {
  
  const Layout = ()=>{
    return(
      <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
    ) 
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Login />,
    },
    {
      path:"/home",
      element:<Layout />,
      children:[
        {
          path:"/home",
          element:<Home />,
        },
        {
          path:"/home/mood",
          element:<Mood />,
        },
        {
          path:"/home/products/:id",
          element:<Products />  
        },
        {
          path:"/home/shop",
          element:<Shop />
        },
        {
          path:"/home/about",
          element:<About />
        }
      ]
    }
  ])


  return (
    <div>
     
      <RouterProvider router={router} />
    </div>
  )
}

export default App
