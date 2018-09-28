import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import SideBar from './SideBar';
import Panel from './Panel';

class Mice extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Mice">
        <header className="Mice-header">
          <div>
            <img className="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" />
            <img className="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
            <h1>MICE CLASS TEST</h1>
          </div>
        </header>
        <Panel />
        <p className="Mice-intro" />
      </div>
    );
  }
}

export default Mice;
