import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

export const ProductsContext = createContext([]);

const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <ProductsContext.Provider value={products}>
        <Header></Header>
        <Outlet></Outlet>
      </ProductsContext.Provider>
    </div>
  );
};

export default Home;
