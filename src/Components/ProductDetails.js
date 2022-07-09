import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";

const ProductDetails = () => {
  const params = useParams();
  const data = useContext(ProductsContext);
  const product = data[params.id - 1];
  const { image, title, description, category, price } = product;
  return (
    <>
      <img src={image} alt="product" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <span>Category : </span>
        {category}
      </p>
      <div>
        <span>{price} $</span>
        <Link to="/products"> Back to Shop</Link>
      </div>
    </>
  );
};

export default ProductDetails;
