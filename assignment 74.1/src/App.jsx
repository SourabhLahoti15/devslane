import React, { useState } from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ProductDetails from "./ProductDetails";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import Login_withFormik from "./Login_withFormik";
import Signup from "./Signup";
import ForgetPassword from "./ForgetPassword";
import { useEffect, useContext } from "react";
import Loading from "./Loading";
import UserContext from "./UserContext";
import UserRoute from "./UserRoute";
import AuthRoute from "./AuthRoute";

function App() {
  const { user, setUser } = useContext(UserContext);

  // const [loading, setLoading] = useState(true);


  // if(loading){
  //   return <Loading />
  // }

  const strCart = localStorage.getItem("strUpdatedCart") || "{}";
  const parseCart = JSON.parse(strCart);
  const [cart, setCart] = useState(parseCart);

  let strTotalQuantity = localStorage.getItem("strTotalQuantity") || "0";
  const parseTotalQuantity = JSON.parse(strTotalQuantity);
  const [totalQuantity, setTotalQuantity] = useState(parseTotalQuantity);


  function addToCartApp(id, quantity) {
    setTotalQuantityFunc(totalQuantity + quantity);
    const oldQuantity = cart[id] || 0;
    const newQuantity = oldQuantity + quantity;
    const updatedCart = { ...cart, [id]: newQuantity };
    setCartFunc(updatedCart);
  }

  function setCartFunc(updatedCart) {
    const strUpdatedCart = JSON.stringify(updatedCart);
    localStorage.setItem("strUpdatedCart", strUpdatedCart);
    setCart(updatedCart);
  }

  function setTotalQuantityFunc(quantity) {
    const strTotalQuantity = JSON.stringify(quantity);
    localStorage.setItem("strTotalQuantity", strTotalQuantity);
    setTotalQuantity(quantity);
  }

  return (
    <div className="flex items-center justify-center w-full">
      <Navbar></Navbar>
      <Routes>
        <Route index element={<UserRoute><HomePage user={user} /></UserRoute>}></Route>
        <Route
          path="/products/:id"
          element={<UserRoute><ProductDetails addToCartApp={addToCartApp} /></UserRoute>}
        ></Route>
        <Route path="/cart" element={<UserRoute><Cart cart={cart} setCartFunc={setCartFunc} totalQuantity={totalQuantity} setTotalQuantityFunc={setTotalQuantityFunc} /></UserRoute>}></Route>
        <Route path="/signup" element={<AuthRoute><Signup /></AuthRoute>}></Route>
        <Route path="/login" element={<AuthRoute><Login_withFormik /></AuthRoute>}></Route>
        <Route path="/forgetpassword" element={<AuthRoute><ForgetPassword /></AuthRoute>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
