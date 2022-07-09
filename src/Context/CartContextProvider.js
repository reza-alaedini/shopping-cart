import React, { useReducer, createContext } from "react";

const initialState = {
  selectedItems: [],
  shopCounter: 0,
  total: 0,
  checkout: false,
};

const cartReducer = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload, quantity: 1 });
        console.log(state.selectedItems);
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      console.log(state.selectedItems);
      console.log(state.selectedItems);
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    case "INCREASE":
      const IndexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexI].quantity++;
      console.log(state.selectedItems);
      return { ...state };
    case "DECREASE":
      const IndexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[IndexD].quantity--;
      console.log(state.selectedItems);
      return { ...state };
    case "CHECKOUT":
      console.log(state.selectedItems);
      return {
        selectedItems: [],
        shopCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      console.log(state.selectedItems);
      return {
        selectedItems: [],
        shopCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
