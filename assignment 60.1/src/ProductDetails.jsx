import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getProductById } from "./api";

function ProductDetails() {
  const params = useParams();
  const id = +params.id;
  const [product, setProduct] = useState();

  useEffect(
    function () {
      const product = getProductById(id);
      product.then(function (response) {
        setProduct(response.data);
      });
    },
    [id]
  );

  if (!product) {
    return <div className="my-[10%]">Loading...</div>;
  }

  return (
    <div className="mx-[auto] my-[12%] max-w-[50%] flex flex-col gap-2">
      <Link
        to="/"
        className="w-fit h-fit px-3 py-1 font-bold bg-red-500 rounded text-white flex items-center justify-center gap-1"
      >
        <IoArrowBackOutline />
        <p>back</p>
      </Link>
      <div className="flex gap-8 items-center w-full h-fit p-4 border-2 rounded bg-white">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full max-w-xs"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl text-gray-800 font-semibold">
            {product.title}
          </h1>
          <p className="font-bold text-lg text-gray-700">${product.price}</p>
          <p className="text-gray-800">{product.description}</p>
          <div className="py-0 flex flex-row gap-1 items-center justify-start">
            <input
              type="text"
              value="1"
              className="p-1 w-10 h-full border-2 rounded"
            />
            <button className="px-5 py-2 whitespace-nowrap bg-red-500 text-white rounded text-xs font-bold">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[15%] h-fit font-black bg-red-500 rounded text-white">
          {id > 1 && (
            <Link
              to={`/products/${id - 1}`}
              className="mx-3 my-1 flex items-center justify-center gap-2"
            >
              <FaArrowLeft />
              <p>Previous</p>
            </Link>
          )}
        </div>
        <div className="w-[15%] h-fit font-black bg-red-500 rounded text-white">
          <Link
            to={`/products/${id + 1}`}
            className="mx-3 my-1 flex items-center justify-center gap-2"
          >
            <p>Next</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
