/** @format */

import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product.id,
      name: this.props.product.name,
      desc: this.props.product.desc,
    };
    }
    onChangeName = e => {
        this.setState({
            name:e.target.value,
        })
    }
    onChangeDesc = e => {
        this.setState({
            desc:e.target.value,
        })
    }

    handelDelete = () => {
        this.props.removeProductCallback(this.state.id)
        
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.editProductCallback({
            id: this.state.id,
            name: this.state.name,
            desc:this.state.desc
        })
    
    }
  render() {
    const { id, name, desc } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' name='id' value={id} disabled></input>
        <input type='text' name='name' value={name} onChange={this.onChangeName}></input>
        <input type='text' name='desc' value={desc} onChange={this.onChangeDesc}></input>
        <button>Spara</button>
        <button onClick={this.handelDelete}>Ta bort</button>
      </form>
    );
  }
}
