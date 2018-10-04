import React from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import Panel from './Panel';

function Calendar() {
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

export default Calendar;
