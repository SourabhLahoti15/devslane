import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import ProductDetails from './ProductDetails'
import Footer from './Footer'

function App() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar></Navbar>
      <div className="mx-[20%] my-[10%] flex flex-col gap-8 py-[5%] bg-white">
        <div className="flex flex-col">
          <select name="sorting" id="sorting" className="border-2 p-2 mr-12 w-fit self-end text-gray-500">
            <option value="default">Default sorting</option>
            <option value="price">Price sorting</option>
            <option value="date">Date sorting</option>
          </select>
        </div>
        <div className="h-[80%] flex flex-wrap justify-center gap-5">
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
          <Product img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
        </div>
        <div className='ml-12 flex gap-2'>
          <button className="px-4 py-2 bg-red-400 text-white">1</button>
          <button className="px-4 py-2 border-2 border-red-400 text-red-400">2</button>
          <button className="px-4 py-2 border-2 border-red-400 text-red-400">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
      <Footer></Footer>
      <ProductDetails img="https://th.bing.com/th/id/OIP.nu49I3ew1V7FCt9SPMh1EQHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7" name="mugs" description="Black Printed Coffee Mug" price="$15.00" />
    </div>
  )
}

export default App
