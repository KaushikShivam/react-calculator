import React from 'react';

import './Button.css';

class Button extends React.Component {
  static defaultProps = {
    wide: false,
    color: 'orange',
  };
  render() {
    const { name, wide, color } = this.props;

    return (
      <button style={{ backgroundColor: color }} className={`Button ${wide && 'Button-wide'}`}>
        {name}
      </button>
    );
  }
}

export default Button;
