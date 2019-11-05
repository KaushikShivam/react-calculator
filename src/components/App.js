import React, { Component } from 'react';
import './App.css';

import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Display result={`0`} />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
