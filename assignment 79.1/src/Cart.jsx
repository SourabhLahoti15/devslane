import React, { useEffect, useState } from "react";
import Button from "./Button";
import { CiCircleRemove } from "react-icons/ci";
import { withCart } from "./withProvider";

function Cart({ cart, setCartFunc, totalQuantity, setTotalQuantityFunc }) {
  const [quantityMap, setQuantityMap] = useState({});

  useEffect(function () {
    const map = cart.reduce(function (m, cartItem) {
      return { ...m, [cartItem.product.id]: cartItem.quantity };
    }, {});
    setQuantityMap(map);
  }, [cart]);

  function handleRemove(event) {
    const pid = event.currentTarget.getAttribute("pid");
    const removedQty = quantityMap[pid];
    const newCart = cart.filter((item) => item.product.id !== pid);
    const newQuantityMap = { ...quantityMap };
    delete newQuantityMap[pid];
    setQuantityMap(newQuantityMap);
    setCartFunc(newCart);
    setTotalQuantityFunc(totalQuantity - removedQty);
  }

  function handleChange(event) {
    const pid = event.currentTarget.getAttribute("pid");
    const newQuantity = +event.target.value;
    const newQuantityMap = { ...quantityMap, [pid]: newQuantity };
    setQuantityMap(newQuantityMap);
  }

  function handleUpdateCart() {
    const updatedCart = cart.map(item => ({ ...item, quantity: quantityMap[item.product.id] }));
    const newTotal = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartFunc(updatedCart);
    setTotalQuantityFunc(newTotal);
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
            {cart.map((cartItem) => (
              <tr key={cartItem.product.id} className="m-4 border">
                <td>
                  <button pid={cartItem.product.id} onClick={handleRemove}>
                    <CiCircleRemove className="text-2xl" />
                  </button>
                </td>
                <td>
                  <img
                    src={cartItem.product.thumbnail}
                    alt={cartItem.product.title}
                    className="w-24"
                  />
                </td>
                <td className="text-red-500 font-bold">
                  {cartItem.product.title}
                </td>
                <td>${cartItem.product.price}</td>
                <td>
                  <input
                    className="border text-center w-10"
                    type="number"
                    min={1}
                    pid={cartItem.product.id}
                    value={quantityMap[cartItem.product.id]}
                    onChange={handleChange}
                  />
                </td>
                <td>
                  ${(cartItem.product.price * quantityMap[cartItem.product.id]).toFixed(2)}
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

export default withCart(Cart);