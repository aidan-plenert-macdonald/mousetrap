import React from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import Panel from './Panel';


function Mice() {
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

export default Mice;
