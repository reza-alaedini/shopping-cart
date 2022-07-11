import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import shopping from "./../assets/icons/shopping.svg";

// Context
import { cartContext } from "../Context/CartContextProvider";

const Navbar = () => {
  const { state } = useContext(cartContext);
  return (
    <div>
      <div>
        <Link to="/products">Products</Link>
        <div>
          <Link to="/cart">
            <img src={shopping} alt="shoppingCart" style={{width: "60px"}} />
          </Link>
          <span>{state.itemCounter}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
