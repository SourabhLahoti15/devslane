import { useEffect, useState } from "react";
import CartContext from "./CartContext";
import { getCartAPI, getProductByIds, setCartAPI } from "./api";
import { withUser } from "./withProvider";

function CartContextProvider({ children, isLoggedIn }) {
    
  const [cart, setCart] = useState([]);

  useEffect(function () {
    if (isLoggedIn) {
      getCartAPI().then(function (response) {
        setCart(response);
      })
    } else {
      const strCart = localStorage.getItem("strCart") || "{}";
      const parseCart = JSON.parse(strCart);
      getProductByIds(Object.keys(parseCart)).then(function (products) {
        const cart = products.map((product) => ({ product: product, quantity: parseCart[product.id] }));
        setCart(cart);
      })
    }
  }, [isLoggedIn])

  let strTotalQuantity = localStorage.getItem("strTotalQuantity") || "0";
  const parseTotalQuantity = JSON.parse(strTotalQuantity);
  const [totalQuantity, setTotalQuantity] = useState(parseTotalQuantity);

  function addToCart(id, quantity) {
    setTotalQuantityFunc(totalQuantity + quantity);
    // const oldQuantity = cart[id] || 0;
    // const newQuantity = oldQuantity + quantity;
    // const updatedCart = { ...cart, [id]: newQuantity };
    // setCartFunc(updatedCart);
  }

  function setCartFunc(updatedCart) {
    setCart(updatedCart);
    if (isLoggedIn) {
      setCartAPI(updatedCart);
    } else {
      const strCart = JSON.stringify(updatedCart);
      localStorage.setItem("strCart", strCart);
    }
  }

  function setTotalQuantityFunc(quantity) {
    const strTotalQuantity = JSON.stringify(quantity);
    localStorage.setItem("strTotalQuantity", strTotalQuantity);
    setTotalQuantity(quantity); 
  }

    return (
        <CartContext.Provider value={{ cart, setCartFunc, totalQuantity, setTotalQuantityFunc, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default withUser(CartContextProvider);
