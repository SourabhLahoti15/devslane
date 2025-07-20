import React, { useState } from "react";
import ProductList from "./ProductList";
import { products } from "./data.js";

function HomePage() {
  const [query, setQuery] = useState("");
  const [filteredProducts, setProducts] = useState(products);
  const [sort, setSort] = useState("default");

  function search(event) {
    const newQuery = event.target.value;
    setQuery(newQuery);
    const filteredProducts = products.filter(function (product) {
      return product.pname.toLowerCase().indexOf(newQuery.toLowerCase()) != -1;
    });
    setProducts(filteredProducts);
  }

  function setSortFunc(event) {
    setSort(event.target.value);
  }

  if (sort == "name a-z") {
    filteredProducts.sort(function (x, y) {
      return x.pname < y.pname ? -1 : 1;
    });
  } else if (sort == "name z-a") {
    filteredProducts.sort(function (x, y) {
      return x.pname < y.pname ? 1 : -1;
    });
  } else if (sort == "price low-high") {
    filteredProducts.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "price high-low") {
    filteredProducts.sort(function (x, y) {
      return y.price - x.price;
    });
  }
  return (
    <div className="mx-[20%] my-[10%] flex flex-col gap-8 py-[5%] w-fit bg-white">
      <div className="flex self-end gap-5 mx-14">
        <input
          className="border-2 px-2 rounded"
          onInput={search}
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
        <ProductList products={filteredProducts} />
      </div>
      <div className="flex self-start mx-14 gap-2">
        <button className="px-4 py-2 bg-red-400 text-white">
          1
        </button>
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
