import React, { Component } from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import './App.css';

import MenuAppBar from './MenuAppBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <header className="App-header">
        <div>
          <img src={leaguelogo} alt="leaguelogo" height="160px" /> 
          <img src={ucsd} alt="ucsd" height="160px" />
        </div>
        </header>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
