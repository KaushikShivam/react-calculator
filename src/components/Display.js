import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ result }) => {
  return (
    <div className='Display'>
      <h2 className='Display-title'>{result}</h2>
    </div>
  );
};

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
