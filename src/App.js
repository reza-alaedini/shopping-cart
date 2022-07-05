import "./App.css";
import Store from "./Components/Store";

// Context
import ProductsContextProvider from "./Context/ProductsContextProvider";

function App() {
  return (
    <ProductsContextProvider>
      <Store />
    </ProductsContextProvider>
  );
}

export default App;
