/** @format */

import "./App.css";
import React, { Component } from "react";
import img from "./images/cat.jpg";

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
    return this.props.render(this.state)
  }
}

function App() {
  return <div className='App'>
    <Mouse render={ (mouse) => <img class="fit-picture"
      src={img}
      style={{
        position:'absolute',
        top: mouse.y,
        left:mouse.x
      }}
     alt="cat"></img>}/>

  </div>;
}

export default App;
