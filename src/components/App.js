import React, { Component } from 'react';
import './App.css';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

// import calculate from '../logic/calculate';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
