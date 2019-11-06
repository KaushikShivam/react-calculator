import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
