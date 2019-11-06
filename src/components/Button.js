import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ name }) => {
  return <button className='Button'>{name}</button>;
};

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
