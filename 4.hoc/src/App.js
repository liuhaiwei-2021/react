/** @format */

import "./App.css";
import React from "react";

function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
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

    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
    render() {
      return <WrappedComponent {...this.state} />;
    }
  }
  //  displayName
  Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`;
  return Mouse;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const Position = (props) => (
  <p>
    Mouse current position: (x:{props.x} y:{props.y})
  </p>
);

const MousePosition = withMouse(Position);

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <h1>High order component</h1>

        <MousePosition></MousePosition>
      </div>
    );
  }
}

export default App;
