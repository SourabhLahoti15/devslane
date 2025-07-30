import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import HollowButton from "./HollowButton";

function Navbar() {
  let strTotalQuantity = localStorage.getItem("strTotalQuantity") || "0";
  const parseTotalQuantity = JSON.parse(strTotalQuantity);
  return (
    <div className="fixed top-0 left-0 right-0 px-[20%] h-[10%] flex items-center justify-between bg-white">
      <img
        className="w-[100px]"
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        alt=""
      />
      <div className="flex items-center gap-4">
        <Link to="/cart">
          <div className="flex flex-col items-center">
            <IoBagOutline className="text-2xl text-red-500 font-bold" />
            <span>{parseTotalQuantity}</span>
          </div>
        </Link>
        <Link to="/login">
          <HollowButton className="hover:bg-red-500 hover:text-white">Login</HollowButton>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
