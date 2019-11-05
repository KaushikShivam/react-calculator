import React from 'react';

import './Button.css';

const Button = ({ name }) => {
  return <button className={`Button ${name === '0' && 'Button-wide'}`}>{name}</button>;
};

export default Button;
