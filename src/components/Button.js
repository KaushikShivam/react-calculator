import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
