import React, { useState } from 'react'
import Navbar from './Navbar'
import HomePage from './HomePage'
import ProductDetails from './ProductDetails'
import Footer from './Footer'
import { Routes, Route } from "react-router-dom"

function App() { 

  const strCart = localStorage.getItem("strUpdatedCart") || "{}";
  const parseCart = JSON.parse(strCart);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState(parseCart);

  function addToCartApp(id, quantity) {
    setTotalQuantity(totalQuantity + quantity);
    const oldQuantity = cart[id] || 0;
    const newQuantity = oldQuantity + quantity;
    const updatedCart = {...cart, [id]: newQuantity};
    const strUpdatedCart = JSON.stringify(updatedCart);
    localStorage.setItem("strUpdatedCart", strUpdatedCart);
    setCart(updatedCart);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <Navbar quantityCount={totalQuantity}></Navbar>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='/products/:id' element={<ProductDetails addToCartApp={addToCartApp} />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
