import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

// Components
import Cart from "./Cart";

// Context
import { cartContext } from "../Context/CartContextProvider";

//Style
import styles from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const { state, dispatch } = useContext(cartContext);
  return (
    <div className={styles.container}>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.selectedItems.length >= 1 && (
        <div className={styles.infoContainer}>
          <h4>
            <span>Total items: </span> {state.itemCounter}
          </h4>
          <h4>
            <span>Totoal payments: </span> {state.total} $
          </h4>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clearBtn}
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear
            </button>
            <button
              className={styles.checkoutBtn}
              onClick={() => dispatch({ type: "CHECKOUT" })}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div className={styles.checkContainer}>
          <h3>Checked Out Successfully !</h3>
          <AwesomeButton type="primary">
            <Link to="/products">Buy More</Link>
          </AwesomeButton>
        </div>
      )}
      {!state.itemCounter && !state.checkout && (
        <div className={styles.clearContainer}>
          <h3>Want To Buy?</h3>
          <AwesomeButton type="primary">
            <Link to="/products">Go To Shop</Link>
          </AwesomeButton>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
