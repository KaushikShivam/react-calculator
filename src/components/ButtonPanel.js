import React from 'react';
import Button from './Button';

import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div className='ButtonPanel'>
        <div className='ButtonPanel-group'>
          <Button name='AC' color='#dfd4d4' />
          <Button name='+/-' color='#dfd4d4' />
          <Button name='%' color='#dfd4d4' />
          <Button name='÷' />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='7' color='#dfd4d4' />
          <Button name='8' color='#dfd4d4' />
          <Button name='9' color='#dfd4d4' />
          <Button name='X' />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='4' color='#dfd4d4' />
          <Button name='5' color='#dfd4d4' />
          <Button name='6' color='#dfd4d4' />
          <Button name='-' />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='1' color='#dfd4d4' />
          <Button name='2' color='#dfd4d4' />
          <Button name='3' color='#dfd4d4' />
          <Button name='+' />
        </div>
        <div className='ButtonPanel-group'>
          <Button name='0' color='#dfd4d4' wide />
          <Button name='.' color='#dfd4d4' />
          <Button name='=' />
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
