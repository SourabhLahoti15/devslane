import React, { useContext } from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link, Navigate } from "react-router-dom";
import HollowButton from "./HollowButton";
import { withUser } from "./withProvider";

function Navbar({ user, setUser }) {
  let strTotalQuantity = localStorage.getItem("strTotalQuantity") || "0";
  const parseTotalQuantity = JSON.parse(strTotalQuantity);

  function handleLogout() {
    localStorage.removeItem("token");
    setUser(undefined);
    <Navigate to="/login" />
    // invalidate token
  }

  return (
    <div className="fixed top-0 left-0 right-0 px-[20%] h-[10%] flex items-center justify-between bg-white">
      <img
        className="w-[100px]"
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png"
        alt=""
      />
      {user &&
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <div className="flex flex-col items-center">
              <IoBagOutline className="text-2xl text-red-500 font-bold" />
              <span>{parseTotalQuantity}</span>
            </div>
          </Link>
          <HollowButton className="hover:bg-red-500 hover:text-white" onClick={handleLogout}>Logout</HollowButton>
        </div>
      }
    </div>
  );
}

export default withUser(Navbar);