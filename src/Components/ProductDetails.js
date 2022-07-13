import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

// Context
import { ProductsContext } from "../Context/ProductsContextProvider";

//Style
import styles from "./ProductDetail.module.css";

const ProductDetails = () => {
  const params = useParams();
  const data = useContext(ProductsContext);
  const product = data[params.id - 1];
  const { image, title, description, category, price } = product;
  return (
    <div className={styles.container}>
      <img src={image} alt="product" className={styles.proImage} />
      <div className={styles.infoContainer}>
        <h3>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p>
          <span>Category : </span>
          {category}
        </p>
        <div className={styles.btnContainer}>
          <AwesomeButton type="whatsapp" className={styles.priceBtn}>{price} $</AwesomeButton>
          <AwesomeButton type="primary" className={styles.shopBtn}>
            <Link to="/products"> Back to Shop</Link>
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
