import React from "react";

function ProductDetails(props){
    return (
        <div class="flex gap-8 mx-[20%] h-fit my-64 p-4 border-2 border-gray-200 bg-white">
            <img src={props.img} alt={props.name} class="w-full max-w-xs" />
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl text-gray-800 font-semibold">{props.name}</h1>
                <p class="font-bold text-lg text-gray-700">{props.price}</p>
                <p class="text-gray-800">{props.description}</p>
                <div class="py-0 flex flex-row gap-1 items-center justify-start">
                    <input type="text" value="1" class="p-1 w-10 h-full border-2 rounded" />
                    <button class="px-5 py-2 bg-red-500 text-white rounded text-xs font-bold">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails