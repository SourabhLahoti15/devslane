import React, { useState } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";
import { Routes, Route, useLocation } from "react-router-dom";
import Cart from "./cart";
import Login from "./Login";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";

function App() {
  const strCart = localStorage.getItem("strUpdatedCart") || "{}";
  const parseCart = JSON.parse(strCart);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cart, setCart] = useState(parseCart);

  function addToCartApp(id, quantity) {
    setTotalQuantity(totalQuantity + quantity);
    const oldQuantity = cart[id] || 0;
    const newQuantity = oldQuantity + quantity;
    const updatedCart = { ...cart, [id]: newQuantity };
    const strUpdatedCart = JSON.stringify(updatedCart);
    localStorage.setItem("strUpdatedCart", strUpdatedCart);
    setCart(updatedCart);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <Navbar quantityCount={totalQuantity}></Navbar>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route
          path="/products/:id"
          element={<ProductDetails addToCartApp={addToCartApp} />}
        ></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
