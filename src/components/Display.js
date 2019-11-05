import React, { Component } from 'react';
import './Display.css';

class Display extends Component {
  static defaultProps = {
    result: '0',
  };
  render() {
    const { result } = this.props;
    return (
      <div className='Display'>
        <h2>Result: {result}</h2>
      </div>
    );
  }
}

export default Display;
