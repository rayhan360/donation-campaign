import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './components/Root/Root'

import Home from './components/Home/Home'
import Donation from './components/Donation/Donation'

import Card from './components/CardDetails/Card'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: 
      },
      {
        path: "/donation/:id",
        element: <Card></Card>,
        loader:()=>fetch("/donation.json")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
