/** @format */

import "./App.css";
import React, { Component } from "react";
import img from "./images/cat.jpg";
import PropTypes from "prop-types";

export class Mouse extends Component {
  state = {
    x: 0,
    y: 0,
  };
  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }
  render() {
    return this.props.children(this.state);
  }
}
Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};

function App() {
  return (
    <div className='App'>
      <Mouse
        children={(mouse) => (
          <img
            className='fit-picture'
            src={img}
            style={{
              position: "absolute",
              top: mouse.y,
              left: mouse.x,
            }}
            alt='cat'></img>
        )}
      />
      <Mouse
        children={(mouse) => (
          <p>
            Mouse position: {mouse.x} {mouse.y}
          </p>
        )}
      />
    </div>
  );
}

export default App;
