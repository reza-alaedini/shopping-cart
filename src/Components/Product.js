import React, { useContext } from "react";
import { Link } from "react-router-dom";

// helper Function
import { shorten, IsInCart, checkQuantity } from "../helpers/functions";

// Context
import { cartContext } from "../Context/CartContextProvider";

// Icons
import trash from "./../assets/icons/trash.svg";

// Style CSS
import styles from "./Product.module.css";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <img
        src={productData.image}
        alt="productImage"
        className={styles.cartImage}
      />
      <h1>{shorten(productData.title)}</h1>
      <p>{productData.price} $</p>
      <div className={styles.buttonContainer}>
        <Link to={`/products/${productData.id}`}>Details</Link>
        <div>
          {checkQuantity(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
              className={styles.handlerButtons}
            >
              -
            </button>
          )}
          {checkQuantity(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
              className={styles.handlerButtons}
            >
              <img src={trash} alt="remove" style={{ width: "17px" }} />
            </button>
          )}
          {checkQuantity(state, productData.id) > 0 && (
            <span className={styles.counter}>{checkQuantity(state, productData.id)}</span>
          )}
          {IsInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
              className={styles.handlerButtons}
            >
              +
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: productData })
              }
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
