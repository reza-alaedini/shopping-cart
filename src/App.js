import './App.css';

// Context
import ProductsContextProvider from './Context/ProductsContextProvider';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>

      </ProductsContextProvider>
    </div>
  );
}

export default App;
