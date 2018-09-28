import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import SideBar from './SideBar';
import Panel from './Panel';

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Calendar">
        <header className="Calendar-header">
          <div>
            <img className="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" />
            <img className="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
            <h1>CALENDAR CLASS TEST</h1>
          </div>
        </header>
        <Panel />
        <p className="Calendar-intro" />
      </div>
    );
  }
}

export default Calendar;
