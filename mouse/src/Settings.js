import React, {Component} from 'react';
import leaguelogo from './leaguelogo.png';
import ucsd from './ucsd.png';
import Card from '@material-ui/core/Card';
import SideBar from './SideBar';
import Panel from './Panel';

class Settings extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <div className="Settings">
        <header className="Settings-header">
          <div>
            <img className="logo-league" src={leaguelogo} alt="leaguelogo" height="160px" />
            <img className="logo-UCSD" src={ucsd} alt="ucsd" height="160px" />
            <h1>SETTINGS CLASS TEST</h1>
          </div>
        </header>
        <Panel/>
        <p className="Settings-intro">

        </p>
      </div>
    );
  }
}

export default Settings;
