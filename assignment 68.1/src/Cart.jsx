import React from "react";
import Button from "./Button";
import { CiCircleRemove } from "react-icons/ci";

function Cart() {
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
            <tr className="m-4 border">
              <td><CiCircleRemove className="text-2xl" /></td>
              <td>product.thumbnail</td>
              <td className="text-red-500 font-bold">product.name</td>
              <td>product.price</td>
              <td>
                <input
                  className="border text-center w-10"
                  type="number"
                  value="1"
                />
              </td>
              <td>$15</td>
            </tr>
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
          <Button className="text-sm">UPDATE CART</Button>
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
