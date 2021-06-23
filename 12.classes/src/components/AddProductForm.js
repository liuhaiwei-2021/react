/** @format */

import React, { Component } from "react";

export default class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addProductCallback({
      id: Date.now().toString(),
      name: this.state.name,
      desc: this.state.desc,
    });
    this.setState({
      name: "",
      desc: "",
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder='product namn...'
          name='name'
          value={this.state.name}
          onChange={this.onChange}></input>
        <input
          placeholder='description...'
          value={this.state.desc}
          name='desc'
          onChange={this.onChange}></input>
        <button>Lägg till</button>
      </form>
    );
  }
}
