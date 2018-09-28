import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import App from './App';
import Mice from './Mice';
import SideBar from './SideBar';
import Settings from './Settings';
import Calendar from './Calendar';


function AppRouter() {
  return (
    <div>
      <SideBar />
      <Router history={createHistory()}>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/mice" exact component={Mice} />
          <Route path="/settings" exact component={Settings} />
          <Route path="/calendar" exact component={Calendar} />
        </Switch>
      </Router>
    </div>
  );
}

export default AppRouter;
