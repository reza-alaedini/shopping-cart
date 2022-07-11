import React, { useContext } from "react";
import { Link } from "react-router-dom";

// helper Function
import { shorten, IsInCart, checkQuantity } from "../helpers/functions";

// Context
import { cartContext } from "../Context/CartContextProvider";

// Icons
import trash from "./../assets/icons/trash.svg";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(cartContext);

  return (
    <div>
      <img
        src={productData.image}
        alt="productImage"
        style={{ width: "200px" }}
      />
      <h1>{shorten(productData.title)}</h1>
      <p>{productData.price}</p>
      <div>
        <Link to={`/products/${productData.id}`}>details</Link>
        <div>
          {checkQuantity(state, productData.id) > 1 && (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: productData })
              }
            >
              -
            </button>
          )}
          {checkQuantity(state, productData.id) === 1 && (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: productData })
              }
            >
              <img src={trash} alt="remove" style={{ width: "25px" }} />
            </button>
          )}
          {IsInCart(state, productData.id) ? (
            <button
              onClick={() =>
                dispatch({ type: "INCREASE", payload: productData })
              }
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
