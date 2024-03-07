import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    }
  ])

  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
