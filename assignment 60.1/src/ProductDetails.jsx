import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getProductById } from "./api";
import Loading from "./Loading";
import Notfound from "./NotFound";

function ProductDetails({addToCartApp}) {
  const params = useParams();
  const id = +params.id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(
    function () {
      const product = getProductById(id);
      product.then(function (response) {
        setProduct(response.data);
        setQuantity(1);
        setLoading(false);
      }).catch(function() {
        setLoading(false);
      });
    },
    [id]
  );

  function changeQuantity(event){
    setQuantity(+event.target.value);
  }

  function addToCartpd(){
    addToCartApp(id, quantity);
  }

  if(loading) {
    return <Loading />;
  }

  if (!product) {
    return <Notfound />;  
  }

  return (
    <div className="mx-12 md:mx-28 lg:mx-36 xl:mx-44 2xl:mx-64 my-[6rem] flex flex-col gap-2">
      <Link
        to="/"
        className="w-fit h-fit px-3 py-1 font-bold bg-red-500 rounded text-white flex items-center justify-center gap-1"
      >
        <IoArrowBackOutline />
        <p>back</p>
      </Link>
      <div className="flex flex-col sm:flex sm:flex-row gap-8 sm:gap-1 items-center w-full h-fit p-4 border-2 rounded bg-white">
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
              type="number"
              value={quantity}
              onChange={changeQuantity}
              className="p-1 w-16 h-full border-2 rounded"
            />
            <button className="px-5 py-2 whitespace-nowrap bg-red-500 text-white rounded text-xs font-bold" onClick={addToCartpd}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-28 h-fit bg-red-500 rounded text-white">
          {id > 1 && (
            <Link
              to={`/products/${id - 1}`}
              className="mx-3 my-1 flex items-center justify-center gap-2"
            >
              <FaArrowLeft />
              <p className="font-black">Previous</p>
            </Link>
          )}
        </div>
        <div className="w-28 h-fit bg-red-500 rounded text-white">
          <Link
            to={`/products/${id + 1}`}
            className="mx-3 my-1 flex items-center justify-center gap-2"
          >
            <p className="font-black">Next</p>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
