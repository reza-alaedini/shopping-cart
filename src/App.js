import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./App.css";

// Components
import Navbar from "./Components/Navbar";
import ProductDetails from "./Components/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart";
import Store from "./Components/Store";

// Context
import CartContextProvider from "./Context/CartContextProvider";
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  const location = useLocation();
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
        {location.pathname === "/" && (
          <Navigate to="/products" replace={true} />
        )}
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
