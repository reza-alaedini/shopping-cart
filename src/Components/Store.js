import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductsContextProvider";
import Product from "./Product";

// Styles
import styles from "./Store.module.css";

const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Product key={product.id} productData={product} />
        ))}
      </div>
    </div>
  );
};

export default Store;
