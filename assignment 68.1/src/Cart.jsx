import React, { useEffect, useState } from "react";
import Button from "./Button";
import { CiCircleRemove } from "react-icons/ci";
import { getProductById } from "./api";
import Loading from "./Loading";

function Cart({ cart, setCartFunc, totalQuantity, setTotalQuantityFunc }) {
  const [loading, setLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState([]);
  const [tempCart, setTempCart] = useState(cart);

  // useEffect(function () {
  //   setTempCart(cart);
  // }, [cart]);

  const ids = Object.keys(cart);

  useEffect(function () {
    const promises = ids.map(function (id) {
      return getProductById(id);
    });
    Promise.all(promises).then(function (responses) {
      const cartProducts = responses.map(response => response.data)
      setCartProducts(cartProducts);
      setLoading(false);
    });
  }, [cart]);

  function handleRemove(event) {
    const pid = event.currentTarget.getAttribute("pid");
    const updatedCart = { ...cart };
    delete updatedCart[pid];
    const removedQty = cart[pid];
    setTotalQuantityFunc(totalQuantity - removedQty);
    setCartFunc(updatedCart);
    setLoading(true);
  }

  function handleChange(event) {
    const pid = event.target.getAttribute("pid");
    const newQty = +event.target.value;
    const newTempCart = { ...tempCart, [pid]: newQty };
    setTempCart(newTempCart);
  }

  function handleUpdateCart() {
    setTotalQuantityFunc(Object.values(tempCart).reduce(function (sum, qty) {
      return sum + Number(qty);
    }, 0))
    setCartFunc(tempCart);
  }

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="my-[8rem] flex flex-col align-center justify-center gap-8 mx-16 sm:mx-24 md:mx-24 lg:mx-32 px-2 sm:px-4 md:px-8 lg:px-12 py-[5%] bg-white">
      <h1 className="text-3xl">Cart</h1>
      <div>
        <table border="1" className="w-full text-center border">
          <thead className="border">
            <tr>
              <th></th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody className="border">
            {cartProducts.map((cartProduct) => (
              <tr key={cartProduct.id} className="m-4 border">
                <td>
                  <button pid={cartProduct.id} onClick={handleRemove}>
                    <CiCircleRemove className="text-2xl" />
                  </button>
                </td>
                <td>
                  <img
                    src={cartProduct.thumbnail}
                    alt={cartProduct.title}
                    className="w-24"
                  />
                </td>
                <td className="text-red-500 font-bold">
                  {cartProduct.title}
                </td>
                <td>${cartProduct.price}</td>
                <td>
                  <input
                    className="border text-center w-10"
                    type="number"
                    min={1}
                    pid={cartProduct.id}
                    value={tempCart[cartProduct.id]}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  ${(cartProduct.price * cart[cartProduct.id]).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-2 w-full flex justify-between border">
          <div className="flex gap-2">
            <input
              className="border px-2"
              placeholder="COUPON CODE"
              type="text"
            />
            <Button className="text-sm">APPLY COUPON</Button>
          </div>
          <Button className="text-sm" onClick={handleUpdateCart}>UPDATE CART</Button>
        </div>
      </div>
      <div className="self-end border">
        <table className="border w-full">
          <thead className="border">
            <tr>
              <th>Cart totals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border">
              <td className="p-3">Subtotal</td>
              <td>subtotal</td>
            </tr>
            <tr className="border">
              <td>Total</td>
              <td>total</td>
            </tr>
          </tbody>
        </table>
        <Button className="m-2">PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
}

export default Cart;
