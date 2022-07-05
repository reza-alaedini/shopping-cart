import React, { useState, useEffect, createContext } from "react";

//API
import { getProducts } from "../service/api";

const ProductsContextProvider = (props) => {

  const ProductsContext = createContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setProducts(await getProducts());
    };

    fetchAPI();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
