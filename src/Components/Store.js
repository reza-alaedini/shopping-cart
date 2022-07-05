import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContextProvider";
import Product from "./Product";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
