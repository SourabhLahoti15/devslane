import React from "react";

function ProductDetails(){
    return (
        <div class="mx-[auto] my-[12%] flex gap-8 items-center self-center w-fit h-fit p-4 border-2 bg-white">
            <img src="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="product-image" class="w-full max-w-xs" />
            <div class="flex flex-col gap-3">
                <h1 class="text-2xl text-gray-800 font-semibold">mugs</h1>
                <p class="font-bold text-lg text-gray-700">$15</p>
                <p class="text-gray-800">Black Printed Coffee Mug</p>
                <div class="py-0 flex flex-row gap-1 items-center justify-start">
                    <input type="text" value="1" class="p-1 w-10 h-full border-2 rounded" />
                    <button class="px-5 py-2 whitespace-nowrap bg-red-500 text-white rounded text-xs font-bold">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails