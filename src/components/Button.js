import React from 'react';

import './Button.css';

const Button = ({ name, wide, color }) => {
  return (
    <button style={{ backgroundColor: color }} className={`Button ${wide && 'Button-wide'}`}>
      {name}
    </button>
  );
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
