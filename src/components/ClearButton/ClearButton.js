import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return(
      <div
        className="f1"
        onClick={() => this.props.handleClear()}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearButton;
