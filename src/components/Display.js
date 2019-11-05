import React from 'react';
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

export default Display;
