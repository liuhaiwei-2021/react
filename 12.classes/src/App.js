/** @format */

import React, { Component } from "react";
import AddProductForm from "./components/AddProductForm";
import Product from "./components/Product";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [{ id: "", name: "", desc: "" }],
    };
  }
  addProductCallback = (product) => {
    // this.setState({ products: [...this.state.products, product] });
    this.setState((prev) => {
      return { products: [...prev.products, product] };
    });
  };
  removeProductCallback = (id) => {
    this.setState((prev) => {
      return { products: prev.products.filter((product) => product.id !== id) };
    });
  };
  componentDidMount() {
    const storeProducts = JSON.parse(localStorage.getItem("products"));
    if (storeProducts) this.setState({ products: storeProducts });
  }
  componentDidUpdate() {
    localStorage.setItem("products", JSON.stringify(this.state.products));
  }
  editProductCallback = (product) => {
    this.setState((prev) => {
      let newProducts = prev.products.map((p) => {
        if (p.id === product.id) return product;
        return product;
      });
      return { products: newProducts };
    });
  };
  render() {
    return (
      <div>
        <AddProductForm addProductCallback={this.addProductCallback} />
        {this.state.products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              removeProductCallback={this.removeProductCallback}
              editProductCallback={this.editProductCallback}
            />
          );
        })}
      </div>
    );
  }
}
