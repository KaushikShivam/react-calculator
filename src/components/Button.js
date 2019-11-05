import React from 'react';

import './Button.css';

class Button extends React.Component {
  static defaultProps = {
    wide: false,
    color: 'orange',
  };

  handleClick = () => this.props.clickHandler(this.props.name);

  render() {
    const { name, wide, color } = this.props;

    return (
      <button
        style={{ backgroundColor: color }}
        className={`Button ${wide && 'Button-wide'}`}
        onClick={this.handleClick}>
        {name}
      </button>
    );
  }
}

export default Button;
