import React, { useContext } from "react";
import { ProductsContext } from "./Home";
import SingleProductCard from "./SingleProductCard";

const Products = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div className="grid grid-cols-4 gap-4 mt-4 h-[500px]">
      {products.map((product) => (
        <SingleProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
<h2>This is the product section</h2>;
