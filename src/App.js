import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import "./App.css";
import ProductDetails from "./Components/ProductDetails";
import Store from "./Components/Store";
import CartContextProvider from "./Context/CartContextProvider";

// Context
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  const location = useLocation();
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
        </Routes>
        {location.pathname === "/" && (
          <Navigate to="/products" replace={true} />
        )}
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
