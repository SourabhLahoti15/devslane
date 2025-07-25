import React from "react";
import { IoBagOutline } from "react-icons/io5";

function Navbar({ quantityCount }) {
    return (
        <div className="fixed top-0 left-0 right-0 px-[20%] h-[10%] flex items-center justify-between bg-white">
            <img className="w-[100px]" src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" alt="" />
            <div className="flex flex-col items-center">
                <IoBagOutline className="text-2xl font-bold" />
                <span>{+quantityCount}</span>
            </div>
        </div>
    );
}

export default Navbar;