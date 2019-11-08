import React from 'react';
import Button from './Button';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  handleClick = buttonName => this.props.clickHandler(buttonName);

  render() {
    return (
      <div className='ButtonPanel'>
        <div className='ButtonPanel-group'>
          <Button name='AC' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='+/-' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='%' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='÷' clickHandler={this.handleClick} />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='7' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='8' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='9' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='X' clickHandler={this.handleClick} />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='4' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='5' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='6' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='-' clickHandler={this.handleClick} />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='1' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='2' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='3' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='+' clickHandler={this.handleClick} />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='0' color='#dfd4d4' clickHandler={this.handleClick} wide />
          <Button name='.' color='#dfd4d4' clickHandler={this.handleClick} />
          <Button name='=' clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
