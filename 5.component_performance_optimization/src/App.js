/** @format */

import "./App.css";

import React, { Component } from "react";

class Number extends Component {
  state = {
    number: 0,
  };
  handleClick = () => {
    this.setState(() => {
      return {
        number: Math.floor(Math.random() * 3),
      };
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState);
    if (this.state.number === nextState.number) {
      return false;
    }
    return true;
  }
  render() {
    console.log("render");

    return (
      <div>
        <h1>Random Number:{this.state.number}</h1>
        <button onClick={this.handleClick}>Generate a random number</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className='App'>
      <Number></Number>
    </div>
  );
}

export default App;
