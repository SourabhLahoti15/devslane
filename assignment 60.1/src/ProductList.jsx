import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
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
