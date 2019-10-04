import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return(
      <div className='e1'>
        {this.props.children}
      </div>
    )
  }
}

export default Input;
