import React, { useState } from 'react'
import Navbar from './Navbar'
import Product from './Product'
import ProductList from './ProductList'
import Footer from './Footer'

function App() {
  const products = [
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "mugs",
      description: "Black Printed Coffee Mug",
      price: 15},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "mugs",
      description: "Father's Day Coffee Mug",
      price: 19},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Green Printed Tshirt",
      price: 34},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "mugs",
      description: "Personalised Mug",
      price: 15},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Printed Brown Tshirt",
      price: 25},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Printed Dark Blue Tshirt",
      price: 34},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Printed Green Tshirt",
      price: 28},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Printed Tshirt Coffee Black Color",
      price: 25},
    {img: "https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      pname: "Tshirts",
      description: "Typography Teal Printed Tshirt",
      price: 32},
  ];

  const [query, setQuery] = useState("");
  const [filteredProducts, setProducts] = useState(products);
  const [sort, setSort] = useState("default");

  function search(event){
    const newQuery = event.target.value;
    setQuery(newQuery);
    const filteredProducts = products.filter(function(product){
      return product.pname.toLowerCase().indexOf(newQuery.toLowerCase()) != -1;
    })
    setProducts(filteredProducts);
  }

  function setSortFunc(event){
    setSort(event.target.value);
  }

  if(sort=="name a-z"){
    filteredProducts.sort(function(x, y){
      return x.pname < y.pname ? -1 : 1;
    })
  }else if(sort=="name z-a"){
    filteredProducts.sort(function(x, y){
      return x.pname < y.pname ? 1 : -1;
    })
  }else if(sort=="price low-high"){
    filteredProducts.sort(function(x, y){
      return x.price - y.price;
    })
  }else if(sort=="price high-low"){
    filteredProducts.sort(function(x, y){
      return y.price - x.price;
    })
  }

  return (
    <div className="flex flex-col h-full w-full">
      <Navbar></Navbar>
      <div className="mx-[20%] my-[10%] flex flex-col items-center gap-8 py-[5%] bg-white">
        <div className="flex self-end gap-5 mx-14">
          <input className="border-2 px-2 rounded" onInput={search} value={query} placeholder='search' type="text" />
          <select name="sorting" id="sorting" value={sort} onChange={setSortFunc} className="border-2 rounded p-2 w-fit text-gray-500">
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
        <div className='flex self-start mx-14 gap-2'>
          <button className="px-4 py-2 bg-red-400 text-white">1</button>
          <button className="px-4 py-2 border-2 border-red-400 text-red-400">2</button>
          <button className="px-4 py-2 border-2 border-red-400 text-red-400">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
