import React, { Component } from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import './App.css';
import SideBar from './SideBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <header className="App-header">
        <div>
          <img class="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" /> 
          <img class="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
        </div>
        </header>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
