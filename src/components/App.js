import React, { Component } from 'react';
import './App.css';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    alert(buttonName);
    this.setState({
      state: calculate(this.state, buttonName),
    });
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className='App'>
        <Display result={next ? next : total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
