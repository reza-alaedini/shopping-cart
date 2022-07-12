import React, { useContext } from "react";

// Context
import { cartContext } from "../Context/CartContextProvider";

// Icons
import trash from "./../assets/icons/trash.svg";

// Helper Functions
import { shorten } from "../helpers/functions";

//Style
import styles from "./Cart.module.css";

const Cart = ({ data }) => {
  const { image, title, price, quantity } = data;
  const { dispatch } = useContext(cartContext);

  return (
    <div className={styles.container}>
      <img src={image} alt="productInCart" style={{ width: "100px" }} />
      <div className={styles.mainInfo}>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <span className={styles.quantity}>{quantity}</span>
      <div className={styles.btnContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            -
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}
          >
            <img src={trash} alt="removeIcon" />
          </button>
        )}
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
