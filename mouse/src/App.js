import React, { Component } from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import './App.css';
import Card from '@material-ui/core/Card';
import SideBar from './SideBar';
import Panel from './Panel';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <img className="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" />
            <img className="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
          </div>
        </header>
        <Panel />
        <p className="App-intro" />
      </div>
    );
  }
}

export default App;
