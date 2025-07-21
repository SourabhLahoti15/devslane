import React, { useState } from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import ProductDetails from './ProductDetails'
import Footer from './Footer'
import { Routes, Route } from "react-router-dom"

function App() { 

  return (
    <div className="flex items-center justify-center w-full">
      <Navbar></Navbar>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/products/:id' element={<ProductDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
