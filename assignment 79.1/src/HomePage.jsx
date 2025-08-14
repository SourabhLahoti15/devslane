import React, { useContext, useState } from "react";
import ProductList from "./ProductList";
import Button from './Button'
import NoMatching from "./NoMatching.jsx";
import { useEffect } from "react";
import { getProducts } from "./api.js";
import { Navigate } from "react-router";
import Loading from "./Loading.jsx";
import { withUser } from "./withProvider";
import { range } from "lodash"
import { Link, useSearchParams } from "react-router-dom";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";

function HomePage({ user }) {
  if (!user) {
    return <Navigate to="/login" />
  }

  const [products, setProducts] = useState([]);
  const [productsMeta, setProductsMeta] = useState();
  const [sort, setSort] = useState();
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams);
  const page = +searchParams.get("page") || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy");
  const sortType = searchParams.get("sortType");

  useEffect(function () {
    const products = getProducts(sortBy, sortType, search, page);
    products.then(function (response) {
      setProducts(response.data.data);
      setProductsMeta(response.data.meta);
      setLoading(false);
    });
  }, [sortBy, sortType, search, page]);

  function setSortByFunc(event) {
    const sortval = event.target.value;
    if (sortval === "default") {
      setSort("default");
      setSearchParams({ ...params, sortBy: "", sortType: "" });
    } else if (sortval === "title a-z") {
      setSort("title a-z");
      setSearchParams({ ...params, sortBy: "title", sortType: "asc" });
    } else if (sortval === "title z-a") {
      setSort("title z-a");
      setSearchParams({ ...params, sortBy: "title", sortType: "desc" });
    } else if (sortval === "price low-to-high") {
      setSort("price low-to-high");
      setSearchParams({ ...params, sortBy: "price", sortType: "asc" });
    } else if (sortval === "price high-to-low") {
      setSort("price high-to-low");
      setSearchParams({ ...params, sortBy: "price", sortType: "desc" });
    }
  }

  function setSearchFunc(event) {
    setSearchParams({ ...params, search: event.target.value, page: 1 });
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="my-[8rem] flex flex-col align-center justify-center gap-8 mx-16 sm:mx-24 md:mx-24 lg:mx-44 px-2 sm:px-4 md:px-8 lg:px-12 py-[5%] w-fit bg-white">
      <div className="flex flex-col sm:flex-row self-end gap-3 sm:gap-5">
        <input
          className="border-2 px-2 rounded h-11"
          onInput={setSearchFunc}
          value={search}
          placeholder="search"
          type="text"
        />
        <select
          name="sorting"
          id="sorting"
          value={sort}
          onChange={setSortByFunc}
          className="border-2 h-11 rounded p-2 w-fit text-gray-500"
        >
          <option value="default">Default sorting</option>
          {/* <option value="name a-z">Sort by name: a-z</option> */}
          {/* <option value="name z-a">Sort by name: z-a</option> */}
          <option value="title a-z">Title a-z</option>
          <option value="title z-a">Title z-a</option>
          <option value="price low-to-high" data-sorttype="asc">Sort by price: low to high</option>
          <option value="price high-to-low" data-sorttype="desc">Sort by price: high to low</option>
          {/* <option value="date">Date sorting</option> */}
        </select>
      </div>
      <div>
        {products.length > 0 ? (
          <ProductList products={products} />
        ) : (
          <NoMatching />
        )}
      </div>
      <div className="flex self-start gap-2">
        {page != 1 && <button onClick={() => setSearchParams({ ...params, page: page - 1 })} className="px-4 py-2 box-border bg-white text-red-500 border-2 border-red-500"><HiOutlineArrowSmLeft /></button>}
        {[...Array(productsMeta.last_page).keys()].map((pageno) => <button key={pageno} onClick={() => setSearchParams({ ...params, page: pageno + 1 })} className={"px-4 py-2 box-border " + (pageno + 1 === page ? "bg-red-500 text-white" : "bg-white text-red-500 border-2 border-red-500")}>{pageno + 1}</button>)}
        {page != productsMeta.last_page && <button onClick={() => setSearchParams({ ...params, page: page + 1 })} className="px-4 py-2 box-border bg-white text-red-500 border-2 border-red-500"><HiOutlineArrowSmRight /></button>}
        {/* {range(1, productsMeta.last_page + 1).map((pageno) => (
          <Link key={pageno} to={"?page=" + pageno} className={"px-4 py-2 box-border " + (pageno === page ? "bg-red-500 text-white" : "bg-white text-red-500 border-2 border-red-500")}>{pageno}</Link>
        ))} */}
      </div>
    </div >
  );
}

export default withUser(HomePage);
