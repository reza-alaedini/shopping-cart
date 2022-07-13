import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons
import shopping from "./../assets/icons/shopping-cart2.png";

// Context
import { cartContext } from "../Context/CartContextProvider";

// Style
import styles from "./Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const { state } = useContext(cartContext);
  return (
    <div>
      <div className={styles.container}>
        <Link
          to="/products"
          className={
            location.pathname === "/products" ? styles.active : styles.navBtn
          }
        >
          Products
        </Link>
        <div className={styles.iconContainer}>
          <Link to="/cart">
            <img
              src={shopping}
              alt="shoppingCart"
              className={styles.shopIcon}
            />
          </Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
