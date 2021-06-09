/** @format */

import React, { Component } from "react";

export class props extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

export default props;
