import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import App from "./App";
import Mice from "./Mice";
import createHistory from 'history/createBrowserHistory';
import SideBar from './SideBar';
import Settings from './Settings';
import Calendar from './Calendar';

class AppRouter extends Component {
  render() {
    return (
    	<div>
    		<SideBar />
      		<Router history={createHistory()}>
	        	<Switch>
	        		<Route path="/" exact={true} component={App}></Route>
	        		<Route path="/mice" exact={true} component={Mice}></Route>
	        		<Route path="/settings" exact={true} component={Settings}></Route>
	        		<Route path="/calendar" exact={true} component={Calendar}></Route>
	        	</Switch>
      		</Router>
      </div>
    );
  }
}

export default AppRouter;
