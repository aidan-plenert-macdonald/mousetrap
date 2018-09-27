import React, { Component } from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import Card from '@material-ui/core/Card';
import SideBar from './SideBar';
import Panel from './Panel'

class Mice extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="Mice">
        <header className="Mice-header">
        <div>
          <img class="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" /> 
          <img class="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
          <h1>MICE CLASS TEST</h1>
        </div>
        </header>
        <Panel/>
        <p className="Mice-intro">
         
        </p>
      </div>
    );
  }
}

export default Mice;
