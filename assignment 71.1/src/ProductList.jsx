import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:gap-1 ">
      {props.products.map(function (product) {
        return <Product
          key={product.id}
          id={product.id}
          thumbnail={product.thumbnail}
          title={product.title}
          description={product.description}
          category={product.category}
          price={product.price}
        />;
      })}
    </div>
  );
}

export default ProductList;
