import React from "react";

function Product(props) {
    return (
        <div className="w-fit h-fit">
            <img className=" h-[70%]" src={props.img} alt="product-img" />
            <div className="h-[30%]">
                <p>{props.pname}</p>
                <p>{props.description}</p>
                <div className="text-red-500">
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <p>Rs. {props.price}</p>
            </div>
        </div>
    );
}

export default Product;