import React from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { products } from "./data";

function ProductDetails() {
    const params = useParams();
    const pid = params.pid;

    function getProductById(pid){
        for(let i=0; i<products.length; i++){
            if(pid == products[i].pid){
                return products[i];
            }
        }
        return -1;
    }

    let product = getProductById(pid);


    return (
        <div className="mx-[auto] my-[12%] flex flex-col gap-2">
            <Link to="/">
                <IoArrowBackOutline className="w-10 h-7 px-1 py-1 bg-red-500 text-white rounded" />
            </Link>
            <div class="flex gap-8 items-center w-full h-fit p-4 border-2 rounded bg-white">
                <img src={product.img} alt={product.pname} class="w-full max-w-xs" />
                <div class="flex flex-col gap-3">
                    <h1 class="text-2xl text-gray-800 font-semibold">{product.pname}</h1>
                    <p class="font-bold text-lg text-gray-700">${product.price}</p>
                    <p class="text-gray-800">{product.description}</p>
                    <div class="py-0 flex flex-row gap-1 items-center justify-start">
                        <input type="text" value="1" class="p-1 w-10 h-full border-2 rounded" />
                        <button class="px-5 py-2 whitespace-nowrap bg-red-500 text-white rounded text-xs font-bold">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;