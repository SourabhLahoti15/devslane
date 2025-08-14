import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import { getProductById } from "./api";
import Loading from "./Loading";
import Button from "./Button";
import Notfound from "./NotFound";
import { withCart } from "./withProvider";

function ProductDetails({ addToCart }) {
  const params = useParams();
  const id = +params.id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(
    function () {
      const product = getProductById(id);
      product
        .then(function (response) {
          setProduct(response.data);
          setQuantity(1);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );

  function changeQuantity(event) {
    setQuantity(+event.target.value);
  }

  function addToCartpd() {
    addToCart(id, quantity);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <Notfound />;
  }

  return (
    <div className="mx-12 md:mx-28 lg:mx-36 xl:mx-44 2xl:mx-64 my-[6rem] flex flex-col gap-2">
      <Link
        to="/"
        className="w-fit h-fit px-4 py-2 bg-red-500 rounded text-white"
      >
        <IoArrowBackOutline className="font-black text-xl" />
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
            <Button className="text-xs" onClick={addToCartpd}>ADD TO CART</Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          {id > 1 && (
            <Link
              to={`/products/${id - 1}`}
            >
              <IoChevronBackOutline className="text-red-500 border-2 border-red-500 rounded-full text-3xl mx-2 my-1 p-2 w-24 h-10" />
            </Link>
          )}
        </div>
        <div>
          <Link
            to={`/products/${id + 1}`}
          >
            <IoChevronForward className="text-red-500 border-2 border-red-500 rounded-full text-3xl mx-2 my-1 p-2 w-24 h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withCart(ProductDetails);
