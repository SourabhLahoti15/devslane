import React, { useState } from "react";
import ProductList from "./ProductList";
import NoMatching from "./NoMatching.jsx";
import { useEffect } from "react";
import { getProducts } from "./api.js";

function HomePage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const products = getProducts();
    products.then(function (response) {
      setProducts(response.data.products);
      setLoading(false);
    });
  }, []);

  function setSortFunc(event) {
    setSort(event.target.value);
  }

  function setQueryFunc(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    let filteredProducts = [...products];
    if (query.trim() !== "") {
      filteredProducts = products.filter(function (product) {
        return (
          product.title.toLowerCase().indexOf(query.toLowerCase()) != -1
        );
      });
    }
    if (sort === "name a-z") {
      filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "name z-a") {
      filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sort === "price low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "price high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    setFilteredProducts(filteredProducts);
  }, [query, sort, products]);

  if(loading){
    return <div className="my-[10%]">Loading...</div>
  }

  return (
    <div className="mx-[20%] my-[10%] flex flex-col align-center justify-center gap-8 px-14 py-[5%] w-fit bg-white">
      <div className="flex self-end gap-5">
        <input
          className="border-2 px-2 rounded"
          onInput={setQueryFunc}
          value={query}
          placeholder="search"
          type="text"
        />
        <select
          name="sorting"
          id="sorting"
          value={sort}
          onChange={setSortFunc}
          className="border-2 rounded p-2 w-fit text-gray-500"
        >
          <option value="default">Default sorting</option>
          <option value="name a-z">Sort by name: a-z</option>
          <option value="name z-a">Sort by name: z-a</option>
          <option value="price low-high">Sort by price: low to high</option>
          <option value="price high-low">Sort by price: high to low</option>
          {/* <option value="date">Date sorting</option> */}
        </select>
      </div>
      <div>
        {filteredProducts.length > 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <NoMatching />
        )}
      </div>
      <div className="flex self-start gap-2">
        <button className="px-4 py-2 bg-red-400 text-white">1</button>
        <button className="px-4 py-2 border-2 border-red-400 text-red-400">
          2
        </button>
        <button className="px-4 py-2 border-2 border-red-400 text-red-400">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
