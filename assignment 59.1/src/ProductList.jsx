import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {props.products.map(function (product) {
        return <Product
          pid={product.pid}
          img={product.img}
          pname={product.pname}
          description={product.description}
          price={product.price}
        />;
      })}
    </div>
  );
}

export default ProductList;
