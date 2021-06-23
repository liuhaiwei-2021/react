/** @format */
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import Product from "./components/Product";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    {
      id: Date.now().toString(),
      name: "TV",
      desc: "best",
    },
  ]);
  const addProductCallback = product => {
    setProducts(prevProducts => {
     return [...prevProducts,product]
    })
  }
  const removeProductCallback = id => {
    setProducts(prevProducts => {
      return prevProducts.filter(product=>product.id!==id)
    })
  }
  return (
    <div className='App'>
      <AddProductForm addProductCallback={addProductCallback}/>
      {products.map((product) => {
        return <Product key={product.id} product={product} removeProductCallback={removeProductCallback} />;
      })}
    </div>
  );
}

export default App;
