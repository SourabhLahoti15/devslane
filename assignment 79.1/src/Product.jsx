import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <Link to={`/products/${props.id}`} className="p-2 w-full aspect-square">
      <div>
        <img className="h-[70%] w-full" src={props.thumbnail} alt={props.title} />
        <div className="h-[30%]">
          <p className="text-lg font-bold line-clamp-1 min-h-[1.5rem]">
            {props.title}
          </p>
          <p className="text-sm font-light line-clamp-1">
            {props.category}
          </p>
          <p className="text-base leading-6 line-clamp-4 min-h-[6rem] text-gray-600">
            {props.description}
          </p>
          <div className="text-red-500">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <p className="line-clamp-1 font-semibold">${props.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default Product;
