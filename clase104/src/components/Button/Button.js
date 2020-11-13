import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" className="random-img-btn" onClick={this.props.onClick}>{'🐱 MIAU 🐱'}</button>
    );
  }
}

export default Button;
